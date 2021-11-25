export const fetchjob = async (query) => {
  let response = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?search=${query}`
  );
  let job = await response.json();
  return job.data;
};
export const fetchcompany = async (query) => {
  let response1 = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?company=${query}`
  );
  let company = await response1.json();
  return company.data;
};
export const fetchsearch = async (query) => {
  let response2 = await fetch(
    ` https://strive-jobs-api.herokuapp.com/jobs?company=${query}` + "&limit=10"
  );
  let search = await response2.json();
  return search.data;
};
