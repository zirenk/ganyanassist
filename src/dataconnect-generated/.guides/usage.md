# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateHipodrom, useUpdateHipodrom, useCreateRaceDay, useUpdateRaceDay, useDeleteHipodrom, useDeleteRaceDay, useListHipodroms, useGetHipodrom, useListRaceDays, useGetRaceDay } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateHipodrom(createHipodromVars);

const { data, isPending, isSuccess, isError, error } = useUpdateHipodrom(updateHipodromVars);

const { data, isPending, isSuccess, isError, error } = useCreateRaceDay(createRaceDayVars);

const { data, isPending, isSuccess, isError, error } = useUpdateRaceDay(updateRaceDayVars);

const { data, isPending, isSuccess, isError, error } = useDeleteHipodrom(deleteHipodromVars);

const { data, isPending, isSuccess, isError, error } = useDeleteRaceDay(deleteRaceDayVars);

const { data, isPending, isSuccess, isError, error } = useListHipodroms();

const { data, isPending, isSuccess, isError, error } = useGetHipodrom(getHipodromVars);

const { data, isPending, isSuccess, isError, error } = useListRaceDays();

const { data, isPending, isSuccess, isError, error } = useGetRaceDay(getRaceDayVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createHipodrom, updateHipodrom, createRaceDay, updateRaceDay, deleteHipodrom, deleteRaceDay, listHipodroms, getHipodrom, listRaceDays, getRaceDay } from '@dataconnect/generated';


// Operation CreateHipodrom:  For variables, look at type CreateHipodromVars in ../index.d.ts
const { data } = await CreateHipodrom(dataConnect, createHipodromVars);

// Operation UpdateHipodrom:  For variables, look at type UpdateHipodromVars in ../index.d.ts
const { data } = await UpdateHipodrom(dataConnect, updateHipodromVars);

// Operation CreateRaceDay:  For variables, look at type CreateRaceDayVars in ../index.d.ts
const { data } = await CreateRaceDay(dataConnect, createRaceDayVars);

// Operation UpdateRaceDay:  For variables, look at type UpdateRaceDayVars in ../index.d.ts
const { data } = await UpdateRaceDay(dataConnect, updateRaceDayVars);

// Operation DeleteHipodrom:  For variables, look at type DeleteHipodromVars in ../index.d.ts
const { data } = await DeleteHipodrom(dataConnect, deleteHipodromVars);

// Operation DeleteRaceDay:  For variables, look at type DeleteRaceDayVars in ../index.d.ts
const { data } = await DeleteRaceDay(dataConnect, deleteRaceDayVars);

// Operation ListHipodroms: 
const { data } = await ListHipodroms(dataConnect);

// Operation GetHipodrom:  For variables, look at type GetHipodromVars in ../index.d.ts
const { data } = await GetHipodrom(dataConnect, getHipodromVars);

// Operation ListRaceDays: 
const { data } = await ListRaceDays(dataConnect);

// Operation GetRaceDay:  For variables, look at type GetRaceDayVars in ../index.d.ts
const { data } = await GetRaceDay(dataConnect, getRaceDayVars);


```