import moment from 'moment'

export default [
{
    text: 'Doc Id',
    dataField: 'id',
    hidden: true
},
{
    text: 'Accepted',
    dataField: 'accepted',
    formatter: (cell,row,rowIndex,formatExtraData) =>
    {
        return (cell) ? "Accepted" : "Rejected"
    },
    style: (cell,row,rowIndex,formatExtraData) =>
    {
        return (cell) ? {
            "background-color":"#dbffdb"
        } : {
            "background-color":"#ffc4bd"
        }
    }
},
{
    text: 'Attending',
    dataField: 'attending',
    formatter: (cell,row,rowIndex,formatExtraData) =>
    {
        return (row.accepted && row.attending) ? "Attending" : "Not Attending"
    }
},
{
    text: 'University',
    dataField: 'universityName'
},
{
    text: 'Program',
    dataField: 'program'
},
{
    text: 'Degree',
    dataField: 'degree'
},
{
    text: 'GRE',
    dataField: 'greQuantitative',
    formatter: (cell,row,rowIndex,formatExtraData) =>
    {
        return `${row.greQuantitative || "Not Reported"}\\${row.greVerbal || "Not Reported"}\\${row.greWriting || "Not Reported"}`
    }
},
{
    text: 'Applied',
    dataField: 'dateApplied',
    formatter: (cell,row,rowIndex,formatExtraData) =>
    {
        return moment(cell).format('MMM DD, YYYY');
    }
},
{
    text: 'Decision',
    dataField: 'dateDecision',
    formatter: (cell,row,rowIndex,formatExtraData) =>
    {
        return moment(cell).format('MMM DD, YYYY');
    }
},
{
    text: 'Comments',
    dataField: 'comments'
}]
