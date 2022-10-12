type User = {
  name: string;
}

async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}

//const data = await fetchApi<User[]>('/users')


function stringifyObjectKeyValues<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj).reduce((acc, key) =>  ({
    ...acc,
    [key]: JSON.stringify(obj[key])
  }), {} as { [K in keyof T]: string })
}

//const stringifiedValues = stringifyObjectKeyValues({ a: "1", b: 2, c: true, d: [1, 2, 3]})



export {}