import { useState } from 'react';
import { Calendar, Plus, Edit, Trash2, AlertCircle, X } from 'lucide-react';
import { useListRaceDays, useListHipodroms, useCreateRaceDay, useUpdateRaceDay, useDeleteRaceDay } from '../../dataconnect-generated/react';
import { ConfirmModal } from '../../components/ConfirmModal';

interface FormData {
  id?: string;
  date: string;
  hipodromId: string;
  notes: string;
}

export const RaceDaysPage = () => {
  const { data: raceDaysData, isLoading: raceDaysLoading, error, refetch } = useListRaceDays();
  const { data: hipodromsData, isLoading: hipodromsLoading } = useListHipodroms();
  const createRaceDay = useCreateRaceDay();
  const updateRaceDay = useUpdateRaceDay();
  const deleteRaceDay = useDeleteRaceDay();

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({ date: '', hipodromId: '', notes: '' });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string; date: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    try {
      if (editMode && formData.id) {
        // Update existing
        await updateRaceDay.mutateAsync({
          id: formData.id,
          date: formData.date,
          hipodromId: formData.hipodromId,
          notes: formData.notes || null,
          status: undefined, // Keep existing status
        });
      } else {
        // Create new
        await createRaceDay.mutateAsync({
          date: formData.date,
          hipodromId: formData.hipodromId,
          notes: formData.notes || null,
        });
      }

      setFormData({ date: '', hipodromId: '', notes: '' });
      setShowForm(false);
      setEditMode(false);
      refetch();
    } catch (error) {
      console.error('Yarış günü kaydedilirken hata:', error);
      setSubmitError(error instanceof Error ? error.message : 'İşlem başarısız');
    }
  };

  const handleEdit = (raceDay: any) => {
    setFormData({
      id: raceDay.id,
      date: raceDay.date,
      hipodromId: raceDay.hipodromId,
      notes: raceDay.notes || '',
    });
    setEditMode(true);
    setShowForm(true);
    setSubmitError(null);
  };

  const handleCancelEdit = () => {
    setFormData({ date: '', hipodromId: '', notes: '' });
    setShowForm(false);
    setEditMode(false);
    setSubmitError(null);
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;

    try {
      await deleteRaceDay.mutateAsync({ id: deleteConfirm.id });
      setDeleteConfirm(null);
      refetch();
    } catch (error) {
      console.error('Yarış günü silinirken hata:', error);
      setSubmitError(error instanceof Error ? error.message : 'Silme işlemi başarısız. Bu yarış gününe bağlı koşular olabilir.');
      setDeleteConfirm(null);
    }
  };

  const getHipodromName = (id: string) => {
    const h = hipodromsData?.hipodroms.find(hip => hip.id === id);
    return h ? `${h.name} (${h.city})` : 'Bilinmiyor';
  };

  const loading = raceDaysLoading || hipodromsLoading;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Yarış Günleri</h1>
          <p className="text-zinc-400">Hipodrom ve tarih bazlı yarış organizasyonu</p>
        </div>
        <button
          onClick={() => {
            setEditMode(false);
            setFormData({ date: '', hipodromId: '', notes: '' });
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />Yeni Yarış Günü
        </button>
      </div>

      {(error || submitError) && (
        <div className="mb-6 bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <h3 className="text-red-500 font-semibold mb-1">Hata</h3>
            <p className="text-red-400 text-sm">{submitError || 'Veriler yüklenirken hata oluştu'}</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              {editMode ? 'Yarış Günü Düzenle' : 'Yeni Yarış Günü Ekle'}
            </h2>
            <button onClick={handleCancelEdit} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tarih *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Hipodrom *</label>
                <select
                  value={formData.hipodromId}
                  onChange={(e) => setFormData({ ...formData, hipodromId: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  required
                  disabled={hipodromsLoading}
                >
                  <option value="">{hipodromsLoading ? 'Yükleniyor...' : 'Hipodrom Seçin'}</option>
                  {hipodromsData?.hipodroms.map((h) => (
                    <option key={h.id} value={h.id}>{h.name} ({h.city})</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Notlar</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                rows={3}
                placeholder="Özel notlar veya açıklamalar..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={createRaceDay.isPending || updateRaceDay.isPending}
                className="bg-primary hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {(createRaceDay.isPending || updateRaceDay.isPending) ? 'Kaydediliyor...' : editMode ? 'Güncelle' : 'Kaydet'}
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      )}

      {loading && (
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-12 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-zinc-400">Yükleniyor...</p>
        </div>
      )}

      {!loading && (
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
          {!raceDaysData?.raceDays || raceDaysData.raceDays.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-400 mb-2">Henüz yarış günü eklenmemiş</h3>
              <p className="text-zinc-500">"Yeni Yarış Günü" butonunu kullanarak ilk kaydı oluşturun.</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-zinc-900 border-b border-zinc-700">
                <tr>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Tarih</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Hipodrom</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Durum</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Notlar</th>
                  <th className="text-right py-4 px-6 text-zinc-400 font-semibold">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {raceDaysData.raceDays.map((rd) => (
                  <tr key={rd.id} className="border-b border-zinc-700 hover:bg-zinc-750">
                    <td className="py-4 px-6 text-white font-semibold">{new Date(rd.date).toLocaleDateString('tr-TR')}</td>
                    <td className="py-4 px-6 text-zinc-400">{getHipodromName(rd.hipodromId)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm ${rd.status === 'PLANNED' ? 'bg-blue-500/20 text-blue-500' : 'bg-zinc-600/20 text-zinc-400'}`}>
                        {rd.status === 'PLANNED' ? 'Planlandı' : rd.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400 max-w-xs truncate">{rd.notes || '-'}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(rd)}
                          className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
                          title="Düzenle"
                        >
                          <Edit className="w-4 h-4 text-secondary" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm({ id: rd.id, date: new Date(rd.date).toLocaleDateString('tr-TR') })}
                          className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
                          title="Sil"
                        >
                          <Trash2 className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deleteConfirm}
        title="Yarış Günü Sil"
        message={`${deleteConfirm?.date} tarihli yarış gününü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteConfirm(null)}
        isLoading={deleteRaceDay.isPending}
      />
    </div>
  );
};
