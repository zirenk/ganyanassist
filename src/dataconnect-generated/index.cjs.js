const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'ganyanassist',
  service: 'ganyanassist-service',
  location: 'europe-west9'
};
exports.connectorConfig = connectorConfig;

const createHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateHipodrom', inputVars);
}
createHipodromRef.operationName = 'CreateHipodrom';
exports.createHipodromRef = createHipodromRef;

exports.createHipodrom = function createHipodrom(dcOrVars, vars) {
  return executeMutation(createHipodromRef(dcOrVars, vars));
};

const updateHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateHipodrom', inputVars);
}
updateHipodromRef.operationName = 'UpdateHipodrom';
exports.updateHipodromRef = updateHipodromRef;

exports.updateHipodrom = function updateHipodrom(dcOrVars, vars) {
  return executeMutation(updateHipodromRef(dcOrVars, vars));
};

const createRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateRaceDay', inputVars);
}
createRaceDayRef.operationName = 'CreateRaceDay';
exports.createRaceDayRef = createRaceDayRef;

exports.createRaceDay = function createRaceDay(dcOrVars, vars) {
  return executeMutation(createRaceDayRef(dcOrVars, vars));
};

const updateRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateRaceDay', inputVars);
}
updateRaceDayRef.operationName = 'UpdateRaceDay';
exports.updateRaceDayRef = updateRaceDayRef;

exports.updateRaceDay = function updateRaceDay(dcOrVars, vars) {
  return executeMutation(updateRaceDayRef(dcOrVars, vars));
};

const deleteHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteHipodrom', inputVars);
}
deleteHipodromRef.operationName = 'DeleteHipodrom';
exports.deleteHipodromRef = deleteHipodromRef;

exports.deleteHipodrom = function deleteHipodrom(dcOrVars, vars) {
  return executeMutation(deleteHipodromRef(dcOrVars, vars));
};

const deleteRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteRaceDay', inputVars);
}
deleteRaceDayRef.operationName = 'DeleteRaceDay';
exports.deleteRaceDayRef = deleteRaceDayRef;

exports.deleteRaceDay = function deleteRaceDay(dcOrVars, vars) {
  return executeMutation(deleteRaceDayRef(dcOrVars, vars));
};

const listHipodromsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHipodroms');
}
listHipodromsRef.operationName = 'ListHipodroms';
exports.listHipodromsRef = listHipodromsRef;

exports.listHipodroms = function listHipodroms(dc) {
  return executeQuery(listHipodromsRef(dc));
};

const getHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHipodrom', inputVars);
}
getHipodromRef.operationName = 'GetHipodrom';
exports.getHipodromRef = getHipodromRef;

exports.getHipodrom = function getHipodrom(dcOrVars, vars) {
  return executeQuery(getHipodromRef(dcOrVars, vars));
};

const listRaceDaysRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRaceDays');
}
listRaceDaysRef.operationName = 'ListRaceDays';
exports.listRaceDaysRef = listRaceDaysRef;

exports.listRaceDays = function listRaceDays(dc) {
  return executeQuery(listRaceDaysRef(dc));
};

const getRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRaceDay', inputVars);
}
getRaceDayRef.operationName = 'GetRaceDay';
exports.getRaceDayRef = getRaceDayRef;

exports.getRaceDay = function getRaceDay(dcOrVars, vars) {
  return executeQuery(getRaceDayRef(dcOrVars, vars));
};
