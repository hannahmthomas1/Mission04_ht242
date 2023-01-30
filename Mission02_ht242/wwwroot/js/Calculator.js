$('#submit').click(function calculate() {
/*calculate percentage with weights*/
    percentage = ($("#assignments").val() * .5) + ($("#group").val() * .1) + ($("#quizzes").val() * .1) + ($("#midterm").val() * .1) +
        ($("#final").val() * .1) + ($("#intex").val() * .1)

    /*find letter grade based on percentage variable above*/
    letter = ''
    if (percentage >= 94) {
        letter = 'A'
    }
    else if ((percentage < 94) & (percentage >= 90)) {
        letter = 'A-'
    }
    else if ((percentage < 90) & (percentage >= 87)) {
        letter = 'B+'
    }
    else if ((percentage < 87) & (percentage >= 84)) {
        letter = 'B'
    }
    else if ((percentage < 84) & (percentage >= 80)) {
        letter = 'B-'
    }
    else if ((percentage < 80) & (percentage >= 77)) {
        letter = 'C+'
    }
    else if ((percentage < 77) & (percentage >= 74)) {
        letter = 'C'
    }
    else if ((percentage < 74) & (percentage >= 70)) {
        letter = 'C-'
    }
    else if ((percentage < 70) & (percentage >= 67)) {
        letter = 'D+'
    }
    else if ((percentage < 67) & (percentage >= 64)) {
        letter = 'D'
    }
    else if ((percentage < 70) & (percentage >= 67)) {
        letter = 'D+'
    }
    else if ((percentage < 64) & (percentage >= 60)) {
        letter = 'D-'
    }
    else {
        letter = 'E'
    }

    /*return variables*/
    $('#finalpercent').html(percentage + "%")
    $('#finalletter').html(letter)

    /*alert(percentage + "%" + "\nLetter Grade: " + letter);*/
})
