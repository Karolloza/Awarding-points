const currentYear = new Date().getFullYear()

export const dropDownItems = [
    {
        value: 'q1',
        name: 'Q1'
    },
    {
        value: 'q2',
        name: 'Q2'
    },
    {
        value: 'q3',
        name: 'Q3'
    },
    {
        value: 'q4',
        name: 'Q4'
    },
    {
        value: 'total',
        name: 'Total'
    },
]

export const timePeriods = {
    q1: {
        start: `${currentYear}-01-01T00:00:00.649+00:00`,
        end : `${currentYear}-03-31T23:59:59.649+00:00`
    },
    q2: {
        start: `${currentYear}-04-01T00:00:00.649+00:00`,
        end : `${currentYear}-06-30T23:59:59.649+00:00`
    },
    q3: {
        start: `${currentYear}-07-01T00:00:00.649+00:00`,
        end : `${currentYear}-09-30T23:59:59.649+00:00`
    },
    q4: {
        start: `${currentYear}-10-01T00:00:00.649+00:00`,
        end : `${currentYear}-12-31T23:59:59.649+00:00`
    },
    total: {
        start: `${currentYear}-01-01T00:00:00.649+00:00`,
        end : `${currentYear}-12-31T23:59:59.649+00:00`
    }
}

export const pointsCounter = (transactionWorth) => {
    let score = 0
    if(transactionWorth <= 50 ) {
        return score
    } else if(transactionWorth <= 100) {
        score = transactionWorth - 50
        return score
    } else {
        score = (transactionWorth - 100) * 2 + 50
    }
    return score
}