import { CreateHipodromData, CreateHipodromVariables, UpdateHipodromData, UpdateHipodromVariables, CreateRaceDayData, CreateRaceDayVariables, UpdateRaceDayData, UpdateRaceDayVariables, DeleteHipodromData, DeleteHipodromVariables, DeleteRaceDayData, DeleteRaceDayVariables, ListHipodromsData, GetHipodromData, GetHipodromVariables, ListRaceDaysData, GetRaceDayData, GetRaceDayVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateHipodrom(options?: useDataConnectMutationOptions<CreateHipodromData, FirebaseError, CreateHipodromVariables>): UseDataConnectMutationResult<CreateHipodromData, CreateHipodromVariables>;
export function useCreateHipodrom(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHipodromData, FirebaseError, CreateHipodromVariables>): UseDataConnectMutationResult<CreateHipodromData, CreateHipodromVariables>;

export function useUpdateHipodrom(options?: useDataConnectMutationOptions<UpdateHipodromData, FirebaseError, UpdateHipodromVariables>): UseDataConnectMutationResult<UpdateHipodromData, UpdateHipodromVariables>;
export function useUpdateHipodrom(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateHipodromData, FirebaseError, UpdateHipodromVariables>): UseDataConnectMutationResult<UpdateHipodromData, UpdateHipodromVariables>;

export function useCreateRaceDay(options?: useDataConnectMutationOptions<CreateRaceDayData, FirebaseError, CreateRaceDayVariables>): UseDataConnectMutationResult<CreateRaceDayData, CreateRaceDayVariables>;
export function useCreateRaceDay(dc: DataConnect, options?: useDataConnectMutationOptions<CreateRaceDayData, FirebaseError, CreateRaceDayVariables>): UseDataConnectMutationResult<CreateRaceDayData, CreateRaceDayVariables>;

export function useUpdateRaceDay(options?: useDataConnectMutationOptions<UpdateRaceDayData, FirebaseError, UpdateRaceDayVariables>): UseDataConnectMutationResult<UpdateRaceDayData, UpdateRaceDayVariables>;
export function useUpdateRaceDay(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateRaceDayData, FirebaseError, UpdateRaceDayVariables>): UseDataConnectMutationResult<UpdateRaceDayData, UpdateRaceDayVariables>;

export function useDeleteHipodrom(options?: useDataConnectMutationOptions<DeleteHipodromData, FirebaseError, DeleteHipodromVariables>): UseDataConnectMutationResult<DeleteHipodromData, DeleteHipodromVariables>;
export function useDeleteHipodrom(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteHipodromData, FirebaseError, DeleteHipodromVariables>): UseDataConnectMutationResult<DeleteHipodromData, DeleteHipodromVariables>;

export function useDeleteRaceDay(options?: useDataConnectMutationOptions<DeleteRaceDayData, FirebaseError, DeleteRaceDayVariables>): UseDataConnectMutationResult<DeleteRaceDayData, DeleteRaceDayVariables>;
export function useDeleteRaceDay(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteRaceDayData, FirebaseError, DeleteRaceDayVariables>): UseDataConnectMutationResult<DeleteRaceDayData, DeleteRaceDayVariables>;

export function useListHipodroms(options?: useDataConnectQueryOptions<ListHipodromsData>): UseDataConnectQueryResult<ListHipodromsData, undefined>;
export function useListHipodroms(dc: DataConnect, options?: useDataConnectQueryOptions<ListHipodromsData>): UseDataConnectQueryResult<ListHipodromsData, undefined>;

export function useGetHipodrom(vars: GetHipodromVariables, options?: useDataConnectQueryOptions<GetHipodromData>): UseDataConnectQueryResult<GetHipodromData, GetHipodromVariables>;
export function useGetHipodrom(dc: DataConnect, vars: GetHipodromVariables, options?: useDataConnectQueryOptions<GetHipodromData>): UseDataConnectQueryResult<GetHipodromData, GetHipodromVariables>;

export function useListRaceDays(options?: useDataConnectQueryOptions<ListRaceDaysData>): UseDataConnectQueryResult<ListRaceDaysData, undefined>;
export function useListRaceDays(dc: DataConnect, options?: useDataConnectQueryOptions<ListRaceDaysData>): UseDataConnectQueryResult<ListRaceDaysData, undefined>;

export function useGetRaceDay(vars: GetRaceDayVariables, options?: useDataConnectQueryOptions<GetRaceDayData>): UseDataConnectQueryResult<GetRaceDayData, GetRaceDayVariables>;
export function useGetRaceDay(dc: DataConnect, vars: GetRaceDayVariables, options?: useDataConnectQueryOptions<GetRaceDayData>): UseDataConnectQueryResult<GetRaceDayData, GetRaceDayVariables>;
