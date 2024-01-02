$('.typebutton').click(function () {
  $('.typebutton').toggleClass('active');
  $('.libsearch').toggleClass('hide');
  $('.libsearch').show();
  $('.libsearch.hide').hide();
})

$('.libsearch.hide').hide();

async function getdata() {
  const localtoken = localStorage.getItem("token");
  const data = localStorage.getItem("data");
  const json = JSON.parse(data)
  let addurl;
  if (json.id.substring(0, 1) == "S") {
    addurl = 'student'
  } else if (json.id.substring(0, 1) == "T") {
    addurl = 'teacher'
  }
  let res = await fetch(`/user/${addurl}/${json.id} `, {
    headers: {
      Authorization: `Bearer ${localtoken}`,
    },
  })
  const body = await res.json()
  if (body.length == 0) {
    document.getElementById('getdata').innerHTML = '<h2>No information</h2>'
  } else {
    let table = '';
    table += `<form id="form1" name="form1">
            <input type="hidden" id="id" value="${body.id}" />
            <tr><td>User Id:</td><td>${json.id}</td></tr>
            <tr><td>Name:</td><td><input type="text" id="name" value="${body.name}" /></td></tr>
            <tr><td>Email:</td><td><input type="text" id="email" value="${body.email}" /></td></tr>
            <tr><td>Major Id:</td><td>${body.major.major_id}</td></tr>
            <tr><td>Major Name:</td><td>${body.major.name}</td></tr>
            <tr><td></td><td><button id="button1" onclick="updateInfos('${json.id}','${body}','${localtoken}')">Update</button></td></tr>
            </form>`
    document.getElementById('getdata').innerHTML = table
  }
}
function updateInfos(userId, body, localtoken) {
  var _id = document.getElementById("id").value;
  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var res = "";
  if (userId.substring(0, 1) == "S") {
    res = fetch(`/user/student/${_id} `, {
      body: JSON.stringify({ "name": _name, "email": _email }),
      headers: {
        Authorization: `Bearer ${localtoken}`,
        'dataType': 'json',
        'content-type': 'application/json'
      },
      method: 'PATCH',
    });
  } else if (userId.substring(0, 1) == "T") {
    res = fetch(`/user/teacher/${_id} `, {
      body: JSON.stringify({ "name": _name, "email": _email }),
      headers: {
        Authorization: `Bearer ${localtoken}`,
        'dataType': 'json',
        'content-type': 'application/json'
      },
      method: 'PATCH',
    });
  } else if (userId.substring(0, 1) == "A") {
    res = fetch(`/user/admin/${_id} `, {
      body: JSON.stringify({ "name": _name, "email": _email }),
      headers: {
        Authorization: `Bearer ${localtoken}`,
        'dataType': 'json',
        'content-type': 'application/json'
      },
      method: 'PATCH',
    });
  }
  alert("Update Success");
}

getdata()
