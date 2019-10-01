/**
 * Get all my todos from backend
 */
$.ajax({
    url: 'http://127.0.0.1:8081/api/v1/todo/',
    method: 'get',
    dataType: 'json',
    success: (response) => {
        const tbody = $('tbody');

        response.forEach((todo) => {
            let row = $('<tr>');

            let blankCol = $('<td>');

            let titleCol = $('<td>');
            titleCol.html(todo.title);

            let beginCol = $('<td>');
            beginCol.html(todo.beginAt);

            let endCol = $('<td>');
            endCol.html(todo.endAt);

            row.append(blankCol);
            row.append(titleCol);
            row.append(beginCol);
            row.append(endCol);

            tbody.append(row);
        });

    },
    error: (error) => {
        alert('Erreur : ' + error);
    }

})