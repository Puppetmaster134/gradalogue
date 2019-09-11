
export default async (app) =>
{
    const queryBody = {
        "application": {
            "user": app.email,
            "universityName":app.universityName ,
            "program": app.program,
            "degree": app.degree,
            "accepted": app.accepted,
            "attending": app.attending,
            "greQuantitative":app.greQuantitative,
            "greVerbal":app.greVerbal,
            "greWriting":app.greWriting,
            "comments": app.comments,
            "dateApplied": app.dateApplied,
            "dateDecision": app.dateDecision
        }
    };

    const res = await fetch(`http://localhost:3000/api/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queryBody)
    });

    var response = await res.json();
}
