document.readyState = function() {
    function submitFile(file) {
        let formData = new FormData()
        formData.append('file', file)
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(() => {
            console.log("Then...")
        })
    }

    window.ondrop = e => {
        console.log("DROP")
        e.stopPropagation()
        e.preventDefault()
    }

    window.ondragover = e => {
        console.log("DRAGEND")
        e.stopPropagation()
        e.preventDefault()
    }

    function drop(e) {
        e.preventDefault()
        e.stopPropagation()
        let dt = e.dataTransfer
        let files = dt.files
        file.forEach(i => {
            submitFile(i)
        })
    }

    document.getElementById("upload").ondrop = e => {
        drop(e)
    }
}