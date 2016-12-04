var toBeElements = [
    // nodes
    { data: universal.persian },
    { data: universal.bombay },
    { data: { id: 'loki', label: 'loki (Rails)', href: 'https://github.com/ChattingCat/loki' } },
    { data: universal.db },
    { data: universal.redis },
    { data: universal.sidekiq },
    { data: {
        id: 'burglar',
        label: 'burglar (Prevent abusing)',
    } },
    { data: {
        id: 's3',
        label: 's3 (Abuser blacklist)',
    } },
    // group
    { data: {
        id: 'database'
    } },
    { data: {
        id: 'mobile-front'
    } },
    // edges
    { data: {
        id: 'l-r',
        label: 'Memory DB',
        source: 'loki',
        target: 'redis'
    } },
    { data: {
        id: 'l-r2',
        label: 'Enqueue Jobs',
        source: 'loki',
        target: 'redis'
    } },
    { data: {
        id: 's-r',
        label: 'Dequeue Jobs',
        source: 'sidekiq',
        target: 'redis'
    } },
    { data: {
        id: 'l-d',
        label: 'Persistant Database',
        source: 'loki',
        target: 'db'
    } },
    { data: {
        id: 'p-l',
        label: 'API Call',
        source: 'persian',
        target: 'loki'
    } },
    { data: {
        id: 'b-l',
        label: 'API Call',
        source: 'bombay',
        target: 'loki'
    } },
    { data: {
        id: 's3-l',
        label: 'Get blacklist',
        source: 'loki',
        target: 's3',
    } },
    { data: {
        id: 'b-s3',
        label: 'Manage blacklist',
        source: 'burglar',
        target: 's3',
    } },
];
