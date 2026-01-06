import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'ganyanassist',
  service: 'ganyanassist-service',
  location: 'europe-west9'
};

export const createHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateHipodrom', inputVars);
}
createHipodromRef.operationName = 'CreateHipodrom';

export function createHipodrom(dcOrVars, vars) {
  return executeMutation(createHipodromRef(dcOrVars, vars));
}

export const updateHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateHipodrom', inputVars);
}
updateHipodromRef.operationName = 'UpdateHipodrom';

export function updateHipodrom(dcOrVars, vars) {
  return executeMutation(updateHipodromRef(dcOrVars, vars));
}

export const createRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateRaceDay', inputVars);
}
createRaceDayRef.operationName = 'CreateRaceDay';

export function createRaceDay(dcOrVars, vars) {
  return executeMutation(createRaceDayRef(dcOrVars, vars));
}

export const updateRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateRaceDay', inputVars);
}
updateRaceDayRef.operationName = 'UpdateRaceDay';

export function updateRaceDay(dcOrVars, vars) {
  return executeMutation(updateRaceDayRef(dcOrVars, vars));
}

export const deleteHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteHipodrom', inputVars);
}
deleteHipodromRef.operationName = 'DeleteHipodrom';

export function deleteHipodrom(dcOrVars, vars) {
  return executeMutation(deleteHipodromRef(dcOrVars, vars));
}

export const deleteRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteRaceDay', inputVars);
}
deleteRaceDayRef.operationName = 'DeleteRaceDay';

export function deleteRaceDay(dcOrVars, vars) {
  return executeMutation(deleteRaceDayRef(dcOrVars, vars));
}

export const listHipodromsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListHipodroms');
}
listHipodromsRef.operationName = 'ListHipodroms';

export function listHipodroms(dc) {
  return executeQuery(listHipodromsRef(dc));
}

export const getHipodromRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetHipodrom', inputVars);
}
getHipodromRef.operationName = 'GetHipodrom';

export function getHipodrom(dcOrVars, vars) {
  return executeQuery(getHipodromRef(dcOrVars, vars));
}

export const listRaceDaysRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRaceDays');
}
listRaceDaysRef.operationName = 'ListRaceDays';

export function listRaceDays(dc) {
  return executeQuery(listRaceDaysRef(dc));
}

export const getRaceDayRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRaceDay', inputVars);
}
getRaceDayRef.operationName = 'GetRaceDay';

export function getRaceDay(dcOrVars, vars) {
  return executeQuery(getRaceDayRef(dcOrVars, vars));
}

