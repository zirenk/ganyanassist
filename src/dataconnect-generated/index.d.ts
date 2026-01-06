import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateHipodromData {
  hipodrom_insert: Hipodrom_Key;
}

export interface CreateHipodromVariables {
  name: string;
  code: string;
  city?: string | null;
  country?: string | null;
}

export interface CreateRaceDayData {
  raceDay_insert: RaceDay_Key;
}

export interface CreateRaceDayVariables {
  date: DateString;
  hipodromId: UUIDString;
  notes?: string | null;
}

export interface DeleteHipodromData {
  hipodrom_delete?: Hipodrom_Key | null;
}

export interface DeleteHipodromVariables {
  id: UUIDString;
}

export interface DeleteRaceDayData {
  raceDay_delete?: RaceDay_Key | null;
}

export interface DeleteRaceDayVariables {
  id: UUIDString;
}

export interface GetHipodromData {
  hipodrom?: {
    id: UUIDString;
    name: string;
    code: string;
    city?: string | null;
    country: string;
    isActive: boolean;
    createdAt: TimestampString;
  } & Hipodrom_Key;
}

export interface GetHipodromVariables {
  id: UUIDString;
}

export interface GetRaceDayData {
  raceDay?: {
    id: UUIDString;
    date: DateString;
    hipodromId: UUIDString;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & RaceDay_Key;
}

export interface GetRaceDayVariables {
  id: UUIDString;
}

export interface Hipodrom_Key {
  id: UUIDString;
  __typename?: 'Hipodrom_Key';
}

export interface Horse_Key {
  id: UUIDString;
  __typename?: 'Horse_Key';
}

export interface ListHipodromsData {
  hipodroms: ({
    id: UUIDString;
    name: string;
    code: string;
    city?: string | null;
    country: string;
    isActive: boolean;
  } & Hipodrom_Key)[];
}

export interface ListRaceDaysData {
  raceDays: ({
    id: UUIDString;
    date: DateString;
    hipodromId: UUIDString;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
  } & RaceDay_Key)[];
}

export interface OddsEntry_Key {
  id: UUIDString;
  __typename?: 'OddsEntry_Key';
}

export interface OddsSnapshot_Key {
  id: UUIDString;
  __typename?: 'OddsSnapshot_Key';
}

export interface RaceDay_Key {
  id: UUIDString;
  __typename?: 'RaceDay_Key';
}

export interface Race_Key {
  id: UUIDString;
  __typename?: 'Race_Key';
}

export interface UpdateHipodromData {
  hipodrom_update?: Hipodrom_Key | null;
}

export interface UpdateHipodromVariables {
  id: UUIDString;
  name?: string | null;
  code?: string | null;
  city?: string | null;
  country?: string | null;
  isActive?: boolean | null;
}

export interface UpdateRaceDayData {
  raceDay_update?: RaceDay_Key | null;
}

export interface UpdateRaceDayVariables {
  id: UUIDString;
  date?: DateString | null;
  hipodromId?: UUIDString | null;
  status?: string | null;
  notes?: string | null;
}

interface CreateHipodromRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHipodromVariables): MutationRef<CreateHipodromData, CreateHipodromVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHipodromVariables): MutationRef<CreateHipodromData, CreateHipodromVariables>;
  operationName: string;
}
export const createHipodromRef: CreateHipodromRef;

export function createHipodrom(vars: CreateHipodromVariables): MutationPromise<CreateHipodromData, CreateHipodromVariables>;
export function createHipodrom(dc: DataConnect, vars: CreateHipodromVariables): MutationPromise<CreateHipodromData, CreateHipodromVariables>;

interface UpdateHipodromRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHipodromVariables): MutationRef<UpdateHipodromData, UpdateHipodromVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateHipodromVariables): MutationRef<UpdateHipodromData, UpdateHipodromVariables>;
  operationName: string;
}
export const updateHipodromRef: UpdateHipodromRef;

export function updateHipodrom(vars: UpdateHipodromVariables): MutationPromise<UpdateHipodromData, UpdateHipodromVariables>;
export function updateHipodrom(dc: DataConnect, vars: UpdateHipodromVariables): MutationPromise<UpdateHipodromData, UpdateHipodromVariables>;

interface CreateRaceDayRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRaceDayVariables): MutationRef<CreateRaceDayData, CreateRaceDayVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateRaceDayVariables): MutationRef<CreateRaceDayData, CreateRaceDayVariables>;
  operationName: string;
}
export const createRaceDayRef: CreateRaceDayRef;

export function createRaceDay(vars: CreateRaceDayVariables): MutationPromise<CreateRaceDayData, CreateRaceDayVariables>;
export function createRaceDay(dc: DataConnect, vars: CreateRaceDayVariables): MutationPromise<CreateRaceDayData, CreateRaceDayVariables>;

interface UpdateRaceDayRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateRaceDayVariables): MutationRef<UpdateRaceDayData, UpdateRaceDayVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateRaceDayVariables): MutationRef<UpdateRaceDayData, UpdateRaceDayVariables>;
  operationName: string;
}
export const updateRaceDayRef: UpdateRaceDayRef;

export function updateRaceDay(vars: UpdateRaceDayVariables): MutationPromise<UpdateRaceDayData, UpdateRaceDayVariables>;
export function updateRaceDay(dc: DataConnect, vars: UpdateRaceDayVariables): MutationPromise<UpdateRaceDayData, UpdateRaceDayVariables>;

interface DeleteHipodromRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHipodromVariables): MutationRef<DeleteHipodromData, DeleteHipodromVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteHipodromVariables): MutationRef<DeleteHipodromData, DeleteHipodromVariables>;
  operationName: string;
}
export const deleteHipodromRef: DeleteHipodromRef;

export function deleteHipodrom(vars: DeleteHipodromVariables): MutationPromise<DeleteHipodromData, DeleteHipodromVariables>;
export function deleteHipodrom(dc: DataConnect, vars: DeleteHipodromVariables): MutationPromise<DeleteHipodromData, DeleteHipodromVariables>;

interface DeleteRaceDayRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRaceDayVariables): MutationRef<DeleteRaceDayData, DeleteRaceDayVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteRaceDayVariables): MutationRef<DeleteRaceDayData, DeleteRaceDayVariables>;
  operationName: string;
}
export const deleteRaceDayRef: DeleteRaceDayRef;

export function deleteRaceDay(vars: DeleteRaceDayVariables): MutationPromise<DeleteRaceDayData, DeleteRaceDayVariables>;
export function deleteRaceDay(dc: DataConnect, vars: DeleteRaceDayVariables): MutationPromise<DeleteRaceDayData, DeleteRaceDayVariables>;

interface ListHipodromsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHipodromsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHipodromsData, undefined>;
  operationName: string;
}
export const listHipodromsRef: ListHipodromsRef;

export function listHipodroms(): QueryPromise<ListHipodromsData, undefined>;
export function listHipodroms(dc: DataConnect): QueryPromise<ListHipodromsData, undefined>;

interface GetHipodromRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHipodromVariables): QueryRef<GetHipodromData, GetHipodromVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHipodromVariables): QueryRef<GetHipodromData, GetHipodromVariables>;
  operationName: string;
}
export const getHipodromRef: GetHipodromRef;

export function getHipodrom(vars: GetHipodromVariables): QueryPromise<GetHipodromData, GetHipodromVariables>;
export function getHipodrom(dc: DataConnect, vars: GetHipodromVariables): QueryPromise<GetHipodromData, GetHipodromVariables>;

interface ListRaceDaysRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRaceDaysData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListRaceDaysData, undefined>;
  operationName: string;
}
export const listRaceDaysRef: ListRaceDaysRef;

export function listRaceDays(): QueryPromise<ListRaceDaysData, undefined>;
export function listRaceDays(dc: DataConnect): QueryPromise<ListRaceDaysData, undefined>;

interface GetRaceDayRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRaceDayVariables): QueryRef<GetRaceDayData, GetRaceDayVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetRaceDayVariables): QueryRef<GetRaceDayData, GetRaceDayVariables>;
  operationName: string;
}
export const getRaceDayRef: GetRaceDayRef;

export function getRaceDay(vars: GetRaceDayVariables): QueryPromise<GetRaceDayData, GetRaceDayVariables>;
export function getRaceDay(dc: DataConnect, vars: GetRaceDayVariables): QueryPromise<GetRaceDayData, GetRaceDayVariables>;

