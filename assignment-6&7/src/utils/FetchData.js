export default async function fetchDataFromAPI(url) {
    const data = await fetch(url);
    const json = await data.json();
    return json;
}
