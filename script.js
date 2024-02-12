async function fetchData() {
    try {
        const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const record = await res.json();
        console.log(record);
        document.getElementById("date").innerHTML = record.data[0].date;
        document.getElementById("areaName").innerHTML = record.data[0].areaName;
        document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
        document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
