import { useState } from 'react';
import { Home, Plus, Edit, Trash2, AlertCircle, X } from 'lucide-react';
import { useListHipodroms, useCreateHipodrom, useUpdateHipodrom, useDeleteHipodrom } from '../../dataconnect-generated/react';
import { ConfirmModal } from '../../components/ConfirmModal';

interface FormData {
  id?: string;
  name: string;
  code: string;
  city: string;
  country: string;
}

export const HipodromsPage = () => {
  const { data, isLoading: loading, error, refetch } = useListHipodroms();
  const createHipodrom = useCreateHipodrom();
  const updateHipodrom = useUpdateHipodrom();
  const deleteHipodrom = useDeleteHipodrom();

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    code: '',
    city: '',
    country: 'Türkiye',
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string; name: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    try {
      if (editMode && formData.id) {
        // Update existing
        await updateHipodrom.mutateAsync({
          id: formData.id,
          name: formData.name,
          code: formData.code,
          city: formData.city || null,
          country: formData.country,
          isActive: undefined, // Don't change active status in edit
        });
      } else {
        // Create new
        await createHipodrom.mutateAsync({
          name: formData.name,
          code: formData.code,
          city: formData.city || null,
          country: formData.country,
        });
      }

      setFormData({ name: '', code: '', city: '', country: 'Türkiye' });
      setShowForm(false);
      setEditMode(false);
      refetch();
    } catch (error) {
      console.error('Hipodrom kaydedilirken hata:', error);
      setSubmitError(error instanceof Error ? error.message : 'İşlem başarısız');
    }
  };

  const handleEdit = (hipodrom: any) => {
    setFormData({
      id: hipodrom.id,
      name: hipodrom.name,
      code: hipodrom.code,
      city: hipodrom.city || '',
      country: hipodrom.country,
    });
    setEditMode(true);
    setShowForm(true);
    setSubmitError(null);
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', code: '', city: '', country: 'Türkiye' });
    setShowForm(false);
    setEditMode(false);
    setSubmitError(null);
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;

    try {
      await deleteHipodrom.mutateAsync({ id: deleteConfirm.id });
      setDeleteConfirm(null);
      refetch();
    } catch (error) {
      console.error('Hipodrom silinirken hata:', error);
      setSubmitError(error instanceof Error ? error.message : 'Silme işlemi başarısız. Bu hipodroma bağlı yarış günleri olabilir.');
      setDeleteConfirm(null);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await updateHipodrom.mutateAsync({
        id,
        isActive: !currentStatus,
      });
      refetch();
    } catch (error) {
      console.error('Durum güncellenirken hata:', error);
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Hipodromlar</h1>
          <p className="text-zinc-400">Yarış mekanlarını yönetin</p>
        </div>
        <button
          onClick={() => {
            setEditMode(false);
            setFormData({ name: '', code: '', city: '', country: 'Türkiye' });
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Yeni Hipodrom
        </button>
      </div>

      {/* Error Display */}
      {(error || submitError) && (
        <div className="mb-6 bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <h3 className="text-red-500 font-semibold mb-1">Hata</h3>
            <p className="text-red-400 text-sm">
              {submitError || (error instanceof Error ? error.message : 'Veriler yüklenirken hata oluştu')}
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="mb-8 bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              {editMode ? 'Hipodrom Düzenle' : 'Yeni Hipodrom Ekle'}
            </h2>
            <button onClick={handleCancelEdit} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Hipodrom Adı *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  placeholder="Örn: Veliefendi"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Kod *
                </label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  placeholder="Örn: VEL"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Şehir
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  placeholder="Örn: İstanbul"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Ülke *
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={createHipodrom.isPending || updateHipodrom.isPending}
                className="bg-primary hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {(createHipodrom.isPending || updateHipodrom.isPending) ? 'Kaydediliyor...' : editMode ? 'Güncelle' : 'Kaydet'}
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

      {/* Loading State */}
      {loading && (
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-12 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-zinc-400">Yükleniyor...</p>
        </div>
      )}

      {/* Liste */}
      {!loading && (
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 overflow-hidden">
          {!data?.hipodroms || data.hipodroms.length === 0 ? (
            <div className="text-center py-12">
              <Home className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-400 mb-2">
                Henüz hipodrom eklenmemiş
              </h3>
              <p className="text-zinc-500">
                "Yeni Hipodrom" butonunu kullanarak ilk kaydı oluşturun.
              </p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-zinc-900 border-b border-zinc-700">
                <tr>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Hipodrom</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Kod</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Şehir</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Ülke</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-semibold">Durum</th>
                  <th className="text-right py-4 px-6 text-zinc-400 font-semibold">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.hipodroms.map((hipodrom) => (
                  <tr key={hipodrom.id} className="border-b border-zinc-700 hover:bg-zinc-750">
                    <td className="py-4 px-6 text-white font-semibold">{hipodrom.name}</td>
                    <td className="py-4 px-6 text-zinc-400">{hipodrom.code}</td>
                    <td className="py-4 px-6 text-zinc-400">{hipodrom.city || '-'}</td>
                    <td className="py-4 px-6 text-zinc-400">{hipodrom.country}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleToggleActive(hipodrom.id, hipodrom.isActive)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          hipodrom.isActive
                            ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
                            : 'bg-red-500/20 text-red-500 hover:bg-red-500/30'
                        } transition-colors`}
                      >
                        {hipodrom.isActive ? 'Aktif' : 'Pasif'}
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(hipodrom)}
                          className="p-2 hover:bg-zinc-700 rounded-lg transition-colors"
                          title="Düzenle"
                        >
                          <Edit className="w-4 h-4 text-secondary" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm({ id: hipodrom.id, name: hipodrom.name })}
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
        title="Hipodrom Sil"
        message={`"${deleteConfirm?.name}" hipodromunu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteConfirm(null)}
        isLoading={deleteHipodrom.isPending}
      />
    </div>
  );
};
