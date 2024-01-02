$('.typebutton').click(function () {
    $('.typebutton').toggleClass('active');
    $('.libsearch').toggleClass('hide');
    $('.libsearch').show();
    $('.libsearch.hide').hide();
})

$('.libsearch.hide').hide();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

async function getdata() {
    // queryString != ''
    //     ? res = await fetch('/book/' + queryString)
    //     : res = await fetch('/book')
    
    // const books = await res.json()
    const books = [
        {
            book_id: 1,
            name: 'Book 1',
            category: 'Book 1',
            available: true,
        },
        {
            book_id: 2,
            name: 'Book 2',
            category: 'Book 2',
            available: true,
        },
        {
            book_id: 3,
            name: 'Book 3',
            category: 'Book 3',
            available: true,
        },
        {
            book_id: 4,
            name: 'Book 4',
            category: 'Book 4',
            available: false,
        },
        {
            book_id: 5,
            name: 'Book 5',
            category: 'Book 5',
            available: false,
        },
        {
            book_id: 6,
            name: 'Book 6',
            category: 'Book 6',
            available: true,
        },
        
    ]
    let status
    let btn

    let table = '<tr><th>Book ID</th><th>Book Name</th><th>Category</th><th>Book Status</th><th>Borrow Now</th></tr>'
    for (let i = 0; i < books.length; i++) {
        if (books[i].available) {
            status = "book-status on"
            btn = "bookresult-btn"
        } else {
            status = "book-status"
            btn = "bookresult-btn off"
        }
        table += `<tr>
                <th>${books[i].book_id}</th>
                <th>${books[i].name}</th>
                <th>${books[i].category}</th>
                <th><div class="${status}">available</div></th>
                <th><button class="${btn}" onclick="borrow(${books[i].book_id})">Borrow</button></th>
                </tr>`
    }
    document.getElementById('getdata').innerHTML = table
}
getdata()

async function borrow(id) {
    const localtoken = localStorage.getItem("token");
    if (localtoken != null) {
        const data = localStorage.getItem("data");
        const json = JSON.parse(data)
        let keys = Object.keys(json)
        if (keys[1].substring(0, 1) == "s") {
            res = await fetch(`/book/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `${localtoken}`,
                    'dataType': 'json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ book_id: id, available: false, student: json.student_id })
            })
        } else if (keys[1].substring(0, 1) == "t") {
            res = await fetch(`/book/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `${localtoken}`,
                    'dataType': 'json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({book_id: id, available: false, teacher: json.teacher_id})
            })
        }
        window.location.replace('library.html')

    } else {
        window.location.href = "login.html";
    }
}

