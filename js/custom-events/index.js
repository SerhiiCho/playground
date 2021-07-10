const TABLES = {
    WORK_TIME: 0,
    STATS_FOR_MONTH: 1,
    MUST_WORK_TIME: 2,
    STATS_FOR_YEAR: 3,
    VACATION_TABLE: 4,
}

// refreshTablesListener.js
window.addEventListener('refreshContent', e => handleRefreshContentEvent(e.detail))

function handleRefreshContentEvent(tableNames) {
    const tables = {
        [TABLES.WORK_TIME]: new WorkTimeListener(),
        [TABLES.STATS_FOR_MONTH]: new StatsForMonthLoader(),
        [TABLES.MUST_WORK_TIME]: new MustWorkTimeLoader(),
        [TABLES.STATS_FOR_YEAR]: new StatsForYearLoader(),
        [TABLES.VACATION_TABLE]: new VacationTableLoader(),
    }

    for (const tableName in tables)
        if (tableNames.includes(parseInt(tableName)))
            tables[tableName].load()
}

class WorkTimeListener {
    refreshContent() {
        window.dispatchEvent(new CustomEvent('refreshContent', {
            detail: [
                TABLES.WORK_TIME,
                TABLES.STATS_FOR_MONTH,
                TABLES.MUST_WORK_TIME,
                TABLES.STATS_FOR_YEAR,
                TABLES.VACATION_TABLE,
            ],
        }))
    }
}

new WorkTimeListener().refreshContent()