# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `ganyanassist`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListHipodroms*](#listhipodroms)
  - [*GetHipodrom*](#gethipodrom)
  - [*ListRaceDays*](#listracedays)
  - [*GetRaceDay*](#getraceday)
- [**Mutations**](#mutations)
  - [*CreateHipodrom*](#createhipodrom)
  - [*UpdateHipodrom*](#updatehipodrom)
  - [*CreateRaceDay*](#createraceday)
  - [*UpdateRaceDay*](#updateraceday)
  - [*DeleteHipodrom*](#deletehipodrom)
  - [*DeleteRaceDay*](#deleteraceday)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `ganyanassist`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `ganyanassist` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListHipodroms
You can execute the `ListHipodroms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listHipodroms(): QueryPromise<ListHipodromsData, undefined>;

interface ListHipodromsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHipodromsData, undefined>;
}
export const listHipodromsRef: ListHipodromsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHipodroms(dc: DataConnect): QueryPromise<ListHipodromsData, undefined>;

interface ListHipodromsRef {
  ...
  (dc: DataConnect): QueryRef<ListHipodromsData, undefined>;
}
export const listHipodromsRef: ListHipodromsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHipodromsRef:
```typescript
const name = listHipodromsRef.operationName;
console.log(name);
```

### Variables
The `ListHipodroms` query has no variables.
### Return Type
Recall that executing the `ListHipodroms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHipodromsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListHipodroms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHipodroms } from '@dataconnect/generated';


// Call the `listHipodroms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHipodroms();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHipodroms(dataConnect);

console.log(data.hipodroms);

// Or, you can use the `Promise` API.
listHipodroms().then((response) => {
  const data = response.data;
  console.log(data.hipodroms);
});
```

### Using `ListHipodroms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHipodromsRef } from '@dataconnect/generated';


// Call the `listHipodromsRef()` function to get a reference to the query.
const ref = listHipodromsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHipodromsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.hipodroms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.hipodroms);
});
```

## GetHipodrom
You can execute the `GetHipodrom` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getHipodrom(vars: GetHipodromVariables): QueryPromise<GetHipodromData, GetHipodromVariables>;

interface GetHipodromRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHipodromVariables): QueryRef<GetHipodromData, GetHipodromVariables>;
}
export const getHipodromRef: GetHipodromRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHipodrom(dc: DataConnect, vars: GetHipodromVariables): QueryPromise<GetHipodromData, GetHipodromVariables>;

interface GetHipodromRef {
  ...
  (dc: DataConnect, vars: GetHipodromVariables): QueryRef<GetHipodromData, GetHipodromVariables>;
}
export const getHipodromRef: GetHipodromRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHipodromRef:
```typescript
const name = getHipodromRef.operationName;
console.log(name);
```

### Variables
The `GetHipodrom` query requires an argument of type `GetHipodromVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHipodromVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetHipodrom` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHipodromData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetHipodrom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHipodrom, GetHipodromVariables } from '@dataconnect/generated';

// The `GetHipodrom` query requires an argument of type `GetHipodromVariables`:
const getHipodromVars: GetHipodromVariables = {
  id: ..., 
};

// Call the `getHipodrom()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHipodrom(getHipodromVars);
// Variables can be defined inline as well.
const { data } = await getHipodrom({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHipodrom(dataConnect, getHipodromVars);

console.log(data.hipodrom);

// Or, you can use the `Promise` API.
getHipodrom(getHipodromVars).then((response) => {
  const data = response.data;
  console.log(data.hipodrom);
});
```

### Using `GetHipodrom`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHipodromRef, GetHipodromVariables } from '@dataconnect/generated';

// The `GetHipodrom` query requires an argument of type `GetHipodromVariables`:
const getHipodromVars: GetHipodromVariables = {
  id: ..., 
};

// Call the `getHipodromRef()` function to get a reference to the query.
const ref = getHipodromRef(getHipodromVars);
// Variables can be defined inline as well.
const ref = getHipodromRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHipodromRef(dataConnect, getHipodromVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.hipodrom);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.hipodrom);
});
```

## ListRaceDays
You can execute the `ListRaceDays` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRaceDays(): QueryPromise<ListRaceDaysData, undefined>;

interface ListRaceDaysRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRaceDaysData, undefined>;
}
export const listRaceDaysRef: ListRaceDaysRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRaceDays(dc: DataConnect): QueryPromise<ListRaceDaysData, undefined>;

interface ListRaceDaysRef {
  ...
  (dc: DataConnect): QueryRef<ListRaceDaysData, undefined>;
}
export const listRaceDaysRef: ListRaceDaysRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRaceDaysRef:
```typescript
const name = listRaceDaysRef.operationName;
console.log(name);
```

### Variables
The `ListRaceDays` query has no variables.
### Return Type
Recall that executing the `ListRaceDays` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRaceDaysData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListRaceDays`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRaceDays } from '@dataconnect/generated';


// Call the `listRaceDays()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRaceDays();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRaceDays(dataConnect);

console.log(data.raceDays);

// Or, you can use the `Promise` API.
listRaceDays().then((response) => {
  const data = response.data;
  console.log(data.raceDays);
});
```

### Using `ListRaceDays`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRaceDaysRef } from '@dataconnect/generated';


// Call the `listRaceDaysRef()` function to get a reference to the query.
const ref = listRaceDaysRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRaceDaysRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.raceDays);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.raceDays);
});
```

## GetRaceDay
You can execute the `GetRaceDay` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRaceDay(vars: GetRaceDayVariables): QueryPromise<GetRaceDayData, GetRaceDayVariables>;

interface GetRaceDayRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRaceDayVariables): QueryRef<GetRaceDayData, GetRaceDayVariables>;
}
export const getRaceDayRef: GetRaceDayRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRaceDay(dc: DataConnect, vars: GetRaceDayVariables): QueryPromise<GetRaceDayData, GetRaceDayVariables>;

interface GetRaceDayRef {
  ...
  (dc: DataConnect, vars: GetRaceDayVariables): QueryRef<GetRaceDayData, GetRaceDayVariables>;
}
export const getRaceDayRef: GetRaceDayRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRaceDayRef:
```typescript
const name = getRaceDayRef.operationName;
console.log(name);
```

### Variables
The `GetRaceDay` query requires an argument of type `GetRaceDayVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetRaceDayVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetRaceDay` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRaceDayData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetRaceDay`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRaceDay, GetRaceDayVariables } from '@dataconnect/generated';

// The `GetRaceDay` query requires an argument of type `GetRaceDayVariables`:
const getRaceDayVars: GetRaceDayVariables = {
  id: ..., 
};

// Call the `getRaceDay()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRaceDay(getRaceDayVars);
// Variables can be defined inline as well.
const { data } = await getRaceDay({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRaceDay(dataConnect, getRaceDayVars);

console.log(data.raceDay);

// Or, you can use the `Promise` API.
getRaceDay(getRaceDayVars).then((response) => {
  const data = response.data;
  console.log(data.raceDay);
});
```

### Using `GetRaceDay`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRaceDayRef, GetRaceDayVariables } from '@dataconnect/generated';

// The `GetRaceDay` query requires an argument of type `GetRaceDayVariables`:
const getRaceDayVars: GetRaceDayVariables = {
  id: ..., 
};

// Call the `getRaceDayRef()` function to get a reference to the query.
const ref = getRaceDayRef(getRaceDayVars);
// Variables can be defined inline as well.
const ref = getRaceDayRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRaceDayRef(dataConnect, getRaceDayVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.raceDay);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.raceDay);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `ganyanassist` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateHipodrom
You can execute the `CreateHipodrom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createHipodrom(vars: CreateHipodromVariables): MutationPromise<CreateHipodromData, CreateHipodromVariables>;

interface CreateHipodromRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHipodromVariables): MutationRef<CreateHipodromData, CreateHipodromVariables>;
}
export const createHipodromRef: CreateHipodromRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createHipodrom(dc: DataConnect, vars: CreateHipodromVariables): MutationPromise<CreateHipodromData, CreateHipodromVariables>;

interface CreateHipodromRef {
  ...
  (dc: DataConnect, vars: CreateHipodromVariables): MutationRef<CreateHipodromData, CreateHipodromVariables>;
}
export const createHipodromRef: CreateHipodromRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createHipodromRef:
```typescript
const name = createHipodromRef.operationName;
console.log(name);
```

### Variables
The `CreateHipodrom` mutation requires an argument of type `CreateHipodromVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateHipodromVariables {
  name: string;
  code: string;
  city?: string | null;
  country?: string | null;
}
```
### Return Type
Recall that executing the `CreateHipodrom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateHipodromData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateHipodromData {
  hipodrom_insert: Hipodrom_Key;
}
```
### Using `CreateHipodrom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createHipodrom, CreateHipodromVariables } from '@dataconnect/generated';

// The `CreateHipodrom` mutation requires an argument of type `CreateHipodromVariables`:
const createHipodromVars: CreateHipodromVariables = {
  name: ..., 
  code: ..., 
  city: ..., // optional
  country: ..., // optional
};

// Call the `createHipodrom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createHipodrom(createHipodromVars);
// Variables can be defined inline as well.
const { data } = await createHipodrom({ name: ..., code: ..., city: ..., country: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createHipodrom(dataConnect, createHipodromVars);

console.log(data.hipodrom_insert);

// Or, you can use the `Promise` API.
createHipodrom(createHipodromVars).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_insert);
});
```

### Using `CreateHipodrom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createHipodromRef, CreateHipodromVariables } from '@dataconnect/generated';

// The `CreateHipodrom` mutation requires an argument of type `CreateHipodromVariables`:
const createHipodromVars: CreateHipodromVariables = {
  name: ..., 
  code: ..., 
  city: ..., // optional
  country: ..., // optional
};

// Call the `createHipodromRef()` function to get a reference to the mutation.
const ref = createHipodromRef(createHipodromVars);
// Variables can be defined inline as well.
const ref = createHipodromRef({ name: ..., code: ..., city: ..., country: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createHipodromRef(dataConnect, createHipodromVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.hipodrom_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_insert);
});
```

## UpdateHipodrom
You can execute the `UpdateHipodrom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateHipodrom(vars: UpdateHipodromVariables): MutationPromise<UpdateHipodromData, UpdateHipodromVariables>;

interface UpdateHipodromRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHipodromVariables): MutationRef<UpdateHipodromData, UpdateHipodromVariables>;
}
export const updateHipodromRef: UpdateHipodromRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateHipodrom(dc: DataConnect, vars: UpdateHipodromVariables): MutationPromise<UpdateHipodromData, UpdateHipodromVariables>;

interface UpdateHipodromRef {
  ...
  (dc: DataConnect, vars: UpdateHipodromVariables): MutationRef<UpdateHipodromData, UpdateHipodromVariables>;
}
export const updateHipodromRef: UpdateHipodromRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateHipodromRef:
```typescript
const name = updateHipodromRef.operationName;
console.log(name);
```

### Variables
The `UpdateHipodrom` mutation requires an argument of type `UpdateHipodromVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateHipodromVariables {
  id: UUIDString;
  name?: string | null;
  code?: string | null;
  city?: string | null;
  country?: string | null;
  isActive?: boolean | null;
}
```
### Return Type
Recall that executing the `UpdateHipodrom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateHipodromData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateHipodromData {
  hipodrom_update?: Hipodrom_Key | null;
}
```
### Using `UpdateHipodrom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateHipodrom, UpdateHipodromVariables } from '@dataconnect/generated';

// The `UpdateHipodrom` mutation requires an argument of type `UpdateHipodromVariables`:
const updateHipodromVars: UpdateHipodromVariables = {
  id: ..., 
  name: ..., // optional
  code: ..., // optional
  city: ..., // optional
  country: ..., // optional
  isActive: ..., // optional
};

// Call the `updateHipodrom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateHipodrom(updateHipodromVars);
// Variables can be defined inline as well.
const { data } = await updateHipodrom({ id: ..., name: ..., code: ..., city: ..., country: ..., isActive: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateHipodrom(dataConnect, updateHipodromVars);

console.log(data.hipodrom_update);

// Or, you can use the `Promise` API.
updateHipodrom(updateHipodromVars).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_update);
});
```

### Using `UpdateHipodrom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateHipodromRef, UpdateHipodromVariables } from '@dataconnect/generated';

// The `UpdateHipodrom` mutation requires an argument of type `UpdateHipodromVariables`:
const updateHipodromVars: UpdateHipodromVariables = {
  id: ..., 
  name: ..., // optional
  code: ..., // optional
  city: ..., // optional
  country: ..., // optional
  isActive: ..., // optional
};

// Call the `updateHipodromRef()` function to get a reference to the mutation.
const ref = updateHipodromRef(updateHipodromVars);
// Variables can be defined inline as well.
const ref = updateHipodromRef({ id: ..., name: ..., code: ..., city: ..., country: ..., isActive: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateHipodromRef(dataConnect, updateHipodromVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.hipodrom_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_update);
});
```

## CreateRaceDay
You can execute the `CreateRaceDay` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createRaceDay(vars: CreateRaceDayVariables): MutationPromise<CreateRaceDayData, CreateRaceDayVariables>;

interface CreateRaceDayRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRaceDayVariables): MutationRef<CreateRaceDayData, CreateRaceDayVariables>;
}
export const createRaceDayRef: CreateRaceDayRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createRaceDay(dc: DataConnect, vars: CreateRaceDayVariables): MutationPromise<CreateRaceDayData, CreateRaceDayVariables>;

interface CreateRaceDayRef {
  ...
  (dc: DataConnect, vars: CreateRaceDayVariables): MutationRef<CreateRaceDayData, CreateRaceDayVariables>;
}
export const createRaceDayRef: CreateRaceDayRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createRaceDayRef:
```typescript
const name = createRaceDayRef.operationName;
console.log(name);
```

### Variables
The `CreateRaceDay` mutation requires an argument of type `CreateRaceDayVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateRaceDayVariables {
  date: DateString;
  hipodromId: UUIDString;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateRaceDay` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateRaceDayData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateRaceDayData {
  raceDay_insert: RaceDay_Key;
}
```
### Using `CreateRaceDay`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createRaceDay, CreateRaceDayVariables } from '@dataconnect/generated';

// The `CreateRaceDay` mutation requires an argument of type `CreateRaceDayVariables`:
const createRaceDayVars: CreateRaceDayVariables = {
  date: ..., 
  hipodromId: ..., 
  notes: ..., // optional
};

// Call the `createRaceDay()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createRaceDay(createRaceDayVars);
// Variables can be defined inline as well.
const { data } = await createRaceDay({ date: ..., hipodromId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createRaceDay(dataConnect, createRaceDayVars);

console.log(data.raceDay_insert);

// Or, you can use the `Promise` API.
createRaceDay(createRaceDayVars).then((response) => {
  const data = response.data;
  console.log(data.raceDay_insert);
});
```

### Using `CreateRaceDay`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createRaceDayRef, CreateRaceDayVariables } from '@dataconnect/generated';

// The `CreateRaceDay` mutation requires an argument of type `CreateRaceDayVariables`:
const createRaceDayVars: CreateRaceDayVariables = {
  date: ..., 
  hipodromId: ..., 
  notes: ..., // optional
};

// Call the `createRaceDayRef()` function to get a reference to the mutation.
const ref = createRaceDayRef(createRaceDayVars);
// Variables can be defined inline as well.
const ref = createRaceDayRef({ date: ..., hipodromId: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createRaceDayRef(dataConnect, createRaceDayVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.raceDay_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.raceDay_insert);
});
```

## UpdateRaceDay
You can execute the `UpdateRaceDay` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateRaceDay(vars: UpdateRaceDayVariables): MutationPromise<UpdateRaceDayData, UpdateRaceDayVariables>;

interface UpdateRaceDayRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateRaceDayVariables): MutationRef<UpdateRaceDayData, UpdateRaceDayVariables>;
}
export const updateRaceDayRef: UpdateRaceDayRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateRaceDay(dc: DataConnect, vars: UpdateRaceDayVariables): MutationPromise<UpdateRaceDayData, UpdateRaceDayVariables>;

interface UpdateRaceDayRef {
  ...
  (dc: DataConnect, vars: UpdateRaceDayVariables): MutationRef<UpdateRaceDayData, UpdateRaceDayVariables>;
}
export const updateRaceDayRef: UpdateRaceDayRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateRaceDayRef:
```typescript
const name = updateRaceDayRef.operationName;
console.log(name);
```

### Variables
The `UpdateRaceDay` mutation requires an argument of type `UpdateRaceDayVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateRaceDayVariables {
  id: UUIDString;
  date?: DateString | null;
  hipodromId?: UUIDString | null;
  status?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateRaceDay` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateRaceDayData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateRaceDayData {
  raceDay_update?: RaceDay_Key | null;
}
```
### Using `UpdateRaceDay`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateRaceDay, UpdateRaceDayVariables } from '@dataconnect/generated';

// The `UpdateRaceDay` mutation requires an argument of type `UpdateRaceDayVariables`:
const updateRaceDayVars: UpdateRaceDayVariables = {
  id: ..., 
  date: ..., // optional
  hipodromId: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateRaceDay()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateRaceDay(updateRaceDayVars);
// Variables can be defined inline as well.
const { data } = await updateRaceDay({ id: ..., date: ..., hipodromId: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateRaceDay(dataConnect, updateRaceDayVars);

console.log(data.raceDay_update);

// Or, you can use the `Promise` API.
updateRaceDay(updateRaceDayVars).then((response) => {
  const data = response.data;
  console.log(data.raceDay_update);
});
```

### Using `UpdateRaceDay`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateRaceDayRef, UpdateRaceDayVariables } from '@dataconnect/generated';

// The `UpdateRaceDay` mutation requires an argument of type `UpdateRaceDayVariables`:
const updateRaceDayVars: UpdateRaceDayVariables = {
  id: ..., 
  date: ..., // optional
  hipodromId: ..., // optional
  status: ..., // optional
  notes: ..., // optional
};

// Call the `updateRaceDayRef()` function to get a reference to the mutation.
const ref = updateRaceDayRef(updateRaceDayVars);
// Variables can be defined inline as well.
const ref = updateRaceDayRef({ id: ..., date: ..., hipodromId: ..., status: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateRaceDayRef(dataConnect, updateRaceDayVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.raceDay_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.raceDay_update);
});
```

## DeleteHipodrom
You can execute the `DeleteHipodrom` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteHipodrom(vars: DeleteHipodromVariables): MutationPromise<DeleteHipodromData, DeleteHipodromVariables>;

interface DeleteHipodromRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHipodromVariables): MutationRef<DeleteHipodromData, DeleteHipodromVariables>;
}
export const deleteHipodromRef: DeleteHipodromRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteHipodrom(dc: DataConnect, vars: DeleteHipodromVariables): MutationPromise<DeleteHipodromData, DeleteHipodromVariables>;

interface DeleteHipodromRef {
  ...
  (dc: DataConnect, vars: DeleteHipodromVariables): MutationRef<DeleteHipodromData, DeleteHipodromVariables>;
}
export const deleteHipodromRef: DeleteHipodromRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteHipodromRef:
```typescript
const name = deleteHipodromRef.operationName;
console.log(name);
```

### Variables
The `DeleteHipodrom` mutation requires an argument of type `DeleteHipodromVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteHipodromVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteHipodrom` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteHipodromData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteHipodromData {
  hipodrom_delete?: Hipodrom_Key | null;
}
```
### Using `DeleteHipodrom`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteHipodrom, DeleteHipodromVariables } from '@dataconnect/generated';

// The `DeleteHipodrom` mutation requires an argument of type `DeleteHipodromVariables`:
const deleteHipodromVars: DeleteHipodromVariables = {
  id: ..., 
};

// Call the `deleteHipodrom()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteHipodrom(deleteHipodromVars);
// Variables can be defined inline as well.
const { data } = await deleteHipodrom({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteHipodrom(dataConnect, deleteHipodromVars);

console.log(data.hipodrom_delete);

// Or, you can use the `Promise` API.
deleteHipodrom(deleteHipodromVars).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_delete);
});
```

### Using `DeleteHipodrom`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteHipodromRef, DeleteHipodromVariables } from '@dataconnect/generated';

// The `DeleteHipodrom` mutation requires an argument of type `DeleteHipodromVariables`:
const deleteHipodromVars: DeleteHipodromVariables = {
  id: ..., 
};

// Call the `deleteHipodromRef()` function to get a reference to the mutation.
const ref = deleteHipodromRef(deleteHipodromVars);
// Variables can be defined inline as well.
const ref = deleteHipodromRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteHipodromRef(dataConnect, deleteHipodromVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.hipodrom_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.hipodrom_delete);
});
```

## DeleteRaceDay
You can execute the `DeleteRaceDay` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteRaceDay(vars: DeleteRaceDayVariables): MutationPromise<DeleteRaceDayData, DeleteRaceDayVariables>;

interface DeleteRaceDayRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRaceDayVariables): MutationRef<DeleteRaceDayData, DeleteRaceDayVariables>;
}
export const deleteRaceDayRef: DeleteRaceDayRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteRaceDay(dc: DataConnect, vars: DeleteRaceDayVariables): MutationPromise<DeleteRaceDayData, DeleteRaceDayVariables>;

interface DeleteRaceDayRef {
  ...
  (dc: DataConnect, vars: DeleteRaceDayVariables): MutationRef<DeleteRaceDayData, DeleteRaceDayVariables>;
}
export const deleteRaceDayRef: DeleteRaceDayRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteRaceDayRef:
```typescript
const name = deleteRaceDayRef.operationName;
console.log(name);
```

### Variables
The `DeleteRaceDay` mutation requires an argument of type `DeleteRaceDayVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteRaceDayVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteRaceDay` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteRaceDayData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteRaceDayData {
  raceDay_delete?: RaceDay_Key | null;
}
```
### Using `DeleteRaceDay`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteRaceDay, DeleteRaceDayVariables } from '@dataconnect/generated';

// The `DeleteRaceDay` mutation requires an argument of type `DeleteRaceDayVariables`:
const deleteRaceDayVars: DeleteRaceDayVariables = {
  id: ..., 
};

// Call the `deleteRaceDay()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteRaceDay(deleteRaceDayVars);
// Variables can be defined inline as well.
const { data } = await deleteRaceDay({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteRaceDay(dataConnect, deleteRaceDayVars);

console.log(data.raceDay_delete);

// Or, you can use the `Promise` API.
deleteRaceDay(deleteRaceDayVars).then((response) => {
  const data = response.data;
  console.log(data.raceDay_delete);
});
```

### Using `DeleteRaceDay`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteRaceDayRef, DeleteRaceDayVariables } from '@dataconnect/generated';

// The `DeleteRaceDay` mutation requires an argument of type `DeleteRaceDayVariables`:
const deleteRaceDayVars: DeleteRaceDayVariables = {
  id: ..., 
};

// Call the `deleteRaceDayRef()` function to get a reference to the mutation.
const ref = deleteRaceDayRef(deleteRaceDayVars);
// Variables can be defined inline as well.
const ref = deleteRaceDayRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteRaceDayRef(dataConnect, deleteRaceDayVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.raceDay_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.raceDay_delete);
});
```

