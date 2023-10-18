google.charts.load("current", {
  packages: ["geochart", "corechart"],
});

google.charts.setOnLoadCallback(loadTable);
google.charts.setOnLoadCallback(drawChart);

function loadTable() {
  const xhttp = new XMLHttpRequest();
  const uri = "http://localhost:3000/slist";
  xhttp.open("GET", uri);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var trHTML = "";
      var num = 1;
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      for (let object of objects) {
        trHTML += "<tr>";
        trHTML += "<td>" + num + "</td>";
        trHTML += "<td>" + object["City"] + "</td>";
        trHTML += "<td>" + object[" Region"] + "</td>";
        trHTML += "<td>" + object[" Country"] + "</td>";
        trHTML += "<td>" + object[" AirQuality"] + "</td>";
        trHTML += "<td>" + object[" WaterPollution"] + "</td>";
        trHTML += "<td>";
        trHTML +=
          '<a type="button" class="btn btn-outline-secondary me-2" onclick="showStudentUpdateBox(\'' +
          object["_id"] +
          '\')"><i class="fas fa-edit"></i>Update</a>';
        trHTML +=
          '<a type="button" class="btn btn-outline-danger" onclick="showStudentDeleteBox(\'' +
          object["_id"] +
          '\')"><i class="fas fa-trash"></i>Delete</a>';
        trHTML += "<tr>";

        num++;
      }
      document.getElementById("mytable").innerHTML = trHTML;

      loadGraph(objects);
    }
  };
}

function drawChart() {
  var c1;
  let a1;
  let c2;
  let a2;
  let c3;
  let a3;
  let c4;
  let a4;
  let c5;
  let a5; 
  
  let roundCount = 0; 
  
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/slist/field/:searchText");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        if (roundCount == 1) {
          c1 = object["City"];
          a1 = Number(object[" AirQuality"]);
        } else if (roundCount == 2) {
          c2 = object["City"];
          a2 = Number(object[" AirQuality"]);
        } else if (roundCount == 3) {
          c3 = object["City"];
          a3 = Number(object[" AirQuality"]);
        } else if (roundCount == 4) {
          c4 = object["City"];
          a4 = Number(object[" AirQuality"]);
        } else if (roundCount == 5) {
          c5 = object["City"];
          a5 = Number(object[" AirQuality"]);
        }
        roundCount += 1; 
      }
    }
  };
      var data = google.visualization.arrayToDataTable([
        ["City", "Airquality"],
        ['4 Surin', 75],
        ['2 Krabi', 97],
        ['1 Nakhon Si Thammarat', 100],
        ['3 Si Sa Ket', 75],
        ['5 Chachoengsao', 75],
      ])
      console.log(data);

      var options = {
        title: "Sample city in Search text",
        bar: { groupWidth: "40%" },
        legend:{ position: "none"}
        
      };
      var chart = new google.visualization.ColumnChart(
        document.getElementById("columnchart_values")
      );
      chart.draw(data, options);
}

function loadGraph(objects) {
  var good_air = 0;
  var bad_air = 0;
  var good_water = 0;
  var bad_water = 0;
  var usa = 0;
  var rus = 0;
  var pol = 0;
  var chi = 0;
  var ger = 0;
  var spa = 0;
  var bra = 0;
  var ind = 0;
  var fra = 0;
  var uk = 0;
  var can = 0;
  var aus = 0;
  var th = 0;
  var jp = 0;
  var mx = 0;
  var en = 0;
  var hg = 0;
  var nw = 0;
  var ag = 0;
  var cl = 0;
  var sw = 0;
  var sl = 0;
  var ice = 0;
  var ind = 0;
  var po = 0;
  var bg = 0;
  var es = 0;
  var sn = 0;
  var sm = 0;
  var pn = 0;
  var mo = 0;
  var li = 0;
  var ln = 0;
  var sf = 0;
  var il = 0;
  var jc = 0;
  var gl = 0;
  var gr = 0;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/slist/");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        if (object[" AirQuality"] >= 50) {
          good_air = good_air + 1;
        } else {
          bad_air = bad_air + 1;
        }

        if (object[" WaterPollution"] >= 50) {
          good_water = good_water + 1;
        } else {
          bad_water = bad_water + 1;
        }

        if (object[" Country"] == " United States of America") {
          usa = usa + 1;
        } else if (object[" Country"] == " Russia") {
          rus = rus + 1;
        } else if (object[" Country"] == " Poland") {
          pol = pol + 1;
        } else if (object[" Country"] == " People's Republic of China") {
          chi = chi + 1;
        } else if (object[" Country"] == " Germany") {
          ger = ger + 1;
        } else if (object[" Country"] == " Spain") {
          spa = spa + 1;
        } else if (object[" Country"] == " Brazil") {
          bra = bra + 1;
        } else if (object[" Country"] == " Indonesia") {
          ind = ind + 1;
        } else if (object[" Country"] == " France") {
          fra = fra + 1;
        } else if (object[" Country"] == " United Kingdom") {
          uk = uk + 1;
        } else if (object[" Country"] == " Canada") {
          can = can + 1;
        } else if (object[" Country"] == " Australia") {
          aus = aus + 1;
        } else if (object[" Country"] == " Thailand") {
          th  = th + 1;
        } else if (object[" Country"] == " Japan") {
          jp  = jp + 1;
        } else if (object[" Country"] == " Mexico") {
          mx  = mx + 1;
        } else if (object[" Country"] == " England") {
          en  = en + 1;
        } else if (object[" Country"] == " Hungary") {
          hg  = hg + 1;
        } else if (object[" Country"] == " Norway") {
          nw  = nw + 1;
        } else if (object[" Country"] == " Argentina") {
          ag  = ag + 1;
        } else if (object[" Country"] == " Chile") {
          cl  = cl + 1;
        } else if (object[" Country"] == " Sweden") {
          sw  = sw + 1;
        } else if (object[" Country"] == " Switzerland") {
          sl  = sl + 1;
        } else if (object[" Country"] == " Iceland") {
          ice  = ice + 1;
        } else if (object[" Country"] == " Estonia") {
          es  = es + 1;
        } else if (object[" Country"] == " Greece") {
          gr  = gr + 1;
        } else if (object[" Country"] == " India") {
          ind  = ind + 1;
        } else if (object[" Country"] == " Portugal") {
          po  = po + 1;
        } else if (object[" Country"] == " Belgium") {
          bg  = bg + 1;
        } else if (object[" Country"] == " Slovenia") {
          sn  = sn + 1;
        } else if (object[" Country"] == " Somalia") {
          sm  = sm + 1;
        } else if (object[" Country"] == " Panama") {
          pn  = pn + 1;
        } else if (object[" Country"] == " Morocco") {
          mo  = mo + 1;
        } else if (object[" Country"] == " Libya") {
          li  = li + 1;
        } else if (object[" Country"] == " Lithuania") {
          ln  = ln + 1;
        } else if (object[" Country"] == " South Africa") {
          sf  = sf + 1;
        } else if (object[" Country"] == " Ireland") {
          il  = il + 1;
        } else if (object[" Country"] == " Jamaica") {
          jc  = jc + 1;
        } else if (object[" Country"] == " Greenland") {
          gl  = gl + 1;
      }
    }
      var data1 = google.visualization.arrayToDataTable([
        ["AirQuality", "Count"],
        ["GoodAir", good_air],
        ["BadAir", bad_air],
      ]);
      var options1 = {
        title: "Count of Air Quality",
        is3D: true,
        colors: ['#00bcd4', '#673ab7'],
      };
      var chart1 = new google.visualization.PieChart(
        document.getElementById("piechartair")
      );
      chart1.draw(data1, options1);

      var data1 = google.visualization.arrayToDataTable([
        ["WaterPollution", "Count"],
        ["GoodWater", good_water],
        ["BadWater", bad_water],
      ]);
      var options1 = {
        title: "Count of Water Quality",
        is3D: true,
        colors: ['#00bcd4', '#673ab7'],
      };
      var chart1 = new google.visualization.PieChart(
        document.getElementById("piechartwater")
      );
      chart1.draw(data1, options1);

      var data = google.visualization.arrayToDataTable([
        ["Country", "Count"],
        ["United States", usa],
        ["Russia", rus],
        ["Poland", pol],
        ["China", chi],
        ["Germany", ger],
        ["Spain", spa],
        ["Brazil", bra],
        ["Indonesia", ind],
        ["France", fra],
        ["United Kingdom", uk],
        ["Canada", can],
        ["Australia", aus],
        ["Thailand", th],
        ["Japan", jp],
        ["Mexico", mx],
        ["England", en],
        ["Hungary",hg],
        ["Norway",nw],
        ["Argentina",ag],
        ["Chile", cl],
        ["Sweden",sw],
        ["Switzerland",sl],
        ["Iceland",ice],
        ["Estonia",es],
        ["Greece",gr],
        ["India",ind],
        ["Portugal",po],
        ["Belgium",bg],
        ["Slovenia",sn],
        ["Somalia",sm],
        ["Panama",pn],
        ["Morocco",mo],
        ["Libya",li],
        ["Lithuania",ln],
        ["South Africa",sf],
        ["Ireland",il],
        ["Jamaica",jc],
        ["Jamaica",gl],

      ]);
      var options = {
        title: "World Map",
        colors: ["#F0F8FF", "#87CEFA", "#4169E1"],
      };
      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      chart.draw(data, options);

      var data = google.visualization.arrayToDataTable([
        ["Country", "AirQuality", { role: "style" } ],
        ["Norway", 100, "#01579b"],
        ["Canada", 97.5, "#0288d1"],
        ["Germany", 97.22, "#03a9f4"],
        ["Sweden", 96.87, "##4fc3f7"],
        ["Switzerland", 95, "#b3e5fc"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Top 5 AirQulities around the world",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values1"));
      chart.draw(view, options);
    }
  };
}

function loadQueryTable() {
  document.getElementById("mytable").innerHTML =
    '<tr><th scope="row" colspan="5">Loading...</th></tr>';
  const searchText = document.getElementById("searchTextBox").value;

  if (searchText == "" || searchText == null) {
    alert("No data");
    loadTable();
  } else {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/slist/field/" + searchText);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var trHTML = "";
        var num = 1;
        const objects = JSON.parse(this.responseText).Complaint;
        for (let object of objects) {
          trHTML += "<tr>";
          trHTML += "<td>" + num + "</td>";
          trHTML += "<td>" + object["City"] + "</td>";
          trHTML += "<td>" + object[" Region"] + "</td>";
          trHTML += "<td>" + object[" Country"] + "</td>";
          trHTML += "<td>" + object[" AirQuality"] + "</td>";
          trHTML += "<td>" + object[" WaterPollution"] + "</td>";
          trHTML += "<td>";
          trHTML +=
            '<a type="button" class="btn btn-outline-secondary" onclick="showStudentUpdateBox(\'' +
            object["_id"] +
            '\')"><i class="fas fa-edit"></i>Update</a>';
          trHTML +=
            '<a type="button" class="btn btn-outline-danger" onclick="studentDelete(\'' +
            object["_id"] +
            '\')"><i class="fas fa-trash"></i>Delete</a></td>';
          trHTML += "<tr>";

          num++;
        }
      }
      console.log(trHTML);
      document.getElementById("mytable").innerHTML = trHTML;
    };
  }
}

function showStudentCreateBox() {
  var d = new Date();
  const date = d.toISOString().split("T")[0];

  Swal.fire({
    title: "Create Student Transaction",
    html:
      '<div class="mb-3"><label for="Created_Date" class="form-label">Created Date</label>' +
      '<div class="mb-3"><label for="City" class="form-label">City</label>' +
      '<input class="form-control" id="City" placeholder="City"></div>' +
      '<div class="mb-3"><label for="Region" class="form-label">Region</label>' +
      '<input class="form-control" id="Region" placeholder="Region"></div>' +
      '<div class="mb-3"><label for="Country" class="form-label">Country</label>' +
      '<input class="form-control" id="Country" placeholder="Country"></div>' +
      '<div class="mb-3"><label for="AirQuality" class="form-label">AirQuality</label>' +
      '<input class="form-control" id="AirQuality" placeholder="AirQuality"></div>' +
      '<div class="mb-3"><label for="WaterPollution" class="form-label">WaterPollution</label>' +
      '<input class="form-control" id="WaterPollution" placeholder="WaterPollution"></div>',

    focusConfirm: false,
    preConfirm: () => {
      slitsCreate();
    },
  });
}

function slitsCreate() {
  const City = document.getElementById("City").value;
  const Region = document.getElementById("Region").value;
  const Country = document.getElementById("Country").value;
  const AirQuality = document.getElementById("AirQuality").value;
  const WaterPollution = document.getElementById("WaterPollution").value;
  console.log(
    JSON.stringify({
      City: City,
      Region: Region,
      Country: Country,
      AirQuality: AirQuality,
      WaterPollution: WaterPollution,
    })
  );

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/slist/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      City: City,
      Region: Region,
      Country: Country,
      AirQuality: AirQuality,
      WaterPollution: WaterPollution,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Create Student Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}

function showStudentDeleteBox(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      studentDelete(id);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}

function studentDelete(id) {
  console.log("Delete: ", id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/slist/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      _id: id,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Delete Student Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}

function showStudentUpdateBox(id) {
  console.log("edit", id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/slist/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const object = JSON.parse(this.responseText).Complaint;
      console.log("showStudentUpdateBox", object);
      Swal.fire({
        title: "Update Pollution Transaction",
        html:
          '<input id="id" class="swal2-input" placeholder="OID" type="hidden" value="' +
          object["_id"] +
          '"><br>' +
          '<div class="mb-3"><label for="City" class="form-label">City</label>' +
          '<input class="form-control" id="City" placeholder="City" value="' +
          object["City"] +
          '"></div>' +
          '<div class="mb-3"><label for="Region" class="form-label">Region</label>' +
          '<input class="form-control" id="Region" placeholder="Region" value="' +
          object[" Region"] +
          '"></div>' +
          '<div class="mb-3"><label for="Country" class="form-label">Country</label>' +
          '<input class="form-control" id="Country" placeholder="Country" value="' +
          object[" Country"] +
          '"></div>' +
          '<div class="mb-3"><label for="AirQuality" class="form-label">AirQuality</label>' +
          '<input class="form-control" id="AirQuality" placeholder="AirQuality" value="' +
          object[" AirQuality"] +
          '"></div>' +
          '<div class="mb-3"><label for="WaterPollution" class="form-label">WaterPollution</label>' +
          '<input class="form-control" id="WaterPollution" placeholder="WaterPollution" value="' +
          object[" WaterPollution"] +
          '"></div>',

        focusConfirm: false,
        preConfirm: () => {
          studentUpdate();
        },
      });
    }
  };
}

function studentUpdate() {
  const id = document.getElementById("id").value;
  const City = document.getElementById("City").value;
  const Region = document.getElementById("Region").value;
  const Country = document.getElementById("Country").value;
  const AirQuality = document.getElementById("AirQuality").value;
  const WaterPollution = document.getElementById("WaterPollution").value;
  console.log(
    JSON.stringify({
      _id: id,
      City: City,
      Region: Region,
      Country: Country,
      AirQuality: AirQuality,
      WaterPollution: WaterPollution,
    })
  );

  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/slist/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      _id: id,
      City: City,
      Region: Region,
      Country: Country,
      AirQuality: AirQuality,
      WaterPollution: WaterPollution,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Update Student Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}
