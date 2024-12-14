let load = true;


const loadData = (data) => {
    for (const id in data) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = data[id];
        } else {
            console.warn(`Element with ID ${id} not found.`);
        }
    }
};

if (load) {
    fetch('innertextdata.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        loadData(data);
      })
      .catch(error => console.log(error));
}

