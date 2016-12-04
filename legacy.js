var legacyElements = [
    // nodes
    { data: universal.persian },
    { data: universal.bombay },
    { data: {
        id: 'ragdoll',
        parent: 'front-end',
        label: 'ragdoll (Angular Front-end)',
        href: 'https://github.com/ChattingCat/ragdoll'
    } },
    { data: {
        id: 'navi', label: 'navi (Admin Angular)',
        parent: 'front-end',
        href: 'https://github.com/ChattingCat/navi'
    }},
    { data: {
        id: 'toothless',
        label: 'toothless (Rails Back-end)',
        href: 'https://github.com/ChattingCat/toothless',
    } },
    { data: universal.db },
    { data: universal.sidekiq },
    { data: universal.redis },
    // group
    { data: {
        id: 'front-end'
    } },
    { data: {
        id: 'mobile-front'
    } },
    { data: {
        id: 'database'
    } },
    // edges
    { data: {
        id: 'r-t',
        label: 'API call',
        source: 'ragdoll',
        target: 'toothless'
    } },
    { data: {
        id: 'n-t',
        label: 'API call',
        source: 'navi',
        target: 'toothless'
    } },
    { data: {
        id: 'l-d',
        label: 'Persistant Database',
        source: 'toothless',
        target: 'db'
    } },
    { data: {
        id: 'p-t',
        label: 'API Call',
        source: 'persian',
        target: 'toothless'
    } },
    { data: {
        id: 'b-t',
        label: 'API Call',
        source: 'bombay',
        target: 'toothless'
    } },
    { data: {
        id: 't-r',
        label: 'Memory DB',
        source: 'toothless',
        target: 'redis'
    } },
    { data: {
        id: 't-r2',
        label: 'Enqueue Jobs',
        source: 'toothless',
        target: 'redis'
    } },
    { data: {
        id: 's-r',
        label: 'Dequeue Jobs',
        source: 'sidekiq',
        target: 'redis'
    } },
];
