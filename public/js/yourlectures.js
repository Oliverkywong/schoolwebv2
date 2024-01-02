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

    let res = await fetch(`/lecture/${json.id}`, {
        headers: {
            Authorization: `Bearer ${localtoken}`,
        },
    })


    const lectures = await res.json()

    if (lectures.length == 0) {
        document.getElementById('getdata').innerHTML = '<h2>No lectures yet</h2>'
    } else {
        let table = '<tr><th>lecture ID</th><th>lecture Name</th><th>Start Time</th><th>End Time</th><th>Sem</th></tr>'
        for (let i = 0; i < lectures.length; i++) {
            table += `<tr>
            <th>${lectures[i].lecture_id}</th>
            <th>${lectures[i].name}</th>
            <th>${lectures[i].start_time}</th>
            <th>${lectures[i].end_time}</th>
            <th>${lectures[i].sem}</th>
                </tr>`
        }
        document.getElementById('getdata').innerHTML = table
    }
}
getdata()
