const loadData = async () => {
  const res = await fetch("/resources/api/Universities.json");
  const data = await res.json();
  showData(data);
};

const showData = (universities) => {
  const universitySearchData = document.getElementById(
    "university-input-field"
  ).value;
  const domainSearchData = document.getElementById("domain-input-field").value;
  const noResult = document.getElementById("no-result");
  let flag1 = false;
  let flag2 = false;
  let uniData = [];

  for (const university of universities) {
    if (universitySearchData === university.name) {
      flag1 = true;
      uniData = uniData.concat(university);
      break;
    }

    if (domainSearchData.endsWith(university.domains[0])) {
      flag2 = true;
      uniData = uniData.concat(university);
      break;
    }
  }

  if (flag1 === true || flag2 === true) {
    console.log(uniData);
    noResult.classList.add("hidden");
    const resultField = document.getElementById("result-field");
    resultField.innerHTML = ``;
    const resultDiv = document.createElement("div");

    resultDiv.innerHTML = `
    <div
    
    class="text-olive mx-auto bg-nearWhite rounded-lg  lower-div"
  >
    <h2 class="text-2xl text-center p-4">Name: ${uniData[0].name}</h2>
    <h2 class="text-xl text-center p-1">Country: ${uniData[0].country}</h2>
    <h2 class="text-xl text-center p-1">University Domains: ${uniData[0].domains[0]}</h2>
    <h2 class="text-xl text-center pt-1 pb-4">Website: <a href=${uniData[0].web_pages[0]}>${uniData[0].web_pages[0]} <i class="fa-solid fa-up-right-from-square"></i></a></h2>
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
document
  .getElementById("domain-search-btn")
  .addEventListener("click", function () {
    loadData();
  });
