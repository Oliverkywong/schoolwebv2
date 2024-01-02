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

    let res = await fetch(`/book/${json.id}`, {
        headers: {
            Authorization: `Bearer ${localtoken}`,
        },
    })

    let books = await res.json()

    if (books.length == 0) {
        document.getElementById('getdata').innerHTML = '<h2>No books borrow yet</h2>'
    } else {
        let table = '<tr><th>Book ID</th><th>Book Name</th><th>Category</th></tr>'
        for (let i = 0; i < books.length; i++) {
            table += `<tr>
                <th>${books[i].book_id}</th>
                <th>${books[i].name}</th>
                <th>${books[i].category}</th>
                </tr>`
        }
        document.getElementById('getdata').innerHTML = table
    }
}
getdata()
