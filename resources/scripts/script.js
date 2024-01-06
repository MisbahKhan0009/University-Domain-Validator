const loadData = async () => {
  const res = await fetch("/resources/api/Universities.json");
  const data = await res.json();
  //   console.log(data);
  showData(data);
};

const showData = (universities) => {
  // console.log(universities);
  const searchData = document.getElementById("university-input-field").value;
  const noResult = document.getElementById("no-result");
  let flag = false;
  let uniData = [];
  for (const university of universities) {
    if (searchData === university.name) {
      flag = true;
      uniData = uniData.concat(university);
      break;
    }
  }
  if (flag === true) {
    console.log(uniData);
    noResult.classList.add("hidden");
    const resultField = document.getElementById("result-field");
    const resultDiv = document.createElement("div");

    resultDiv.innerHTML = `
    <div
    
    class="text-olive mx-auto bg-nearWhite rounded-lg  lower-div"
  >
    <h2 class="text-2xl text-center p-4">Name: ${uniData[0].name}</h2>
    <h2 class="text-xl text-center p-1">Country: ${uniData[0].country}</h2>
    <h2 class="text-xl text-center p-1">Name: ${uniData[0].name}</h2>
  </div>
    `;
    resultField.appendChild(resultDiv);
  } else {
    noResult.classList.remove("hidden");
  }
};

document
  .getElementById("university-search-btn")
  .addEventListener("click", function () {
    loadData();
  });
  