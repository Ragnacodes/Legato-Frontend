export const intervalToText = (interval) => {
    switch (interval) {
        case 0:
            return 'Once.';
        case 2:
            return 'Every 2 minutes.';
        case 15:
            return 'Every 15 minutes.';
        case 30:
            return 'Every 30 minutes.';
        case 45:
            return 'Every 45 minutes.';
        case 60:
            return 'Every 1 hour.';
        case 360:
            return 'Every 6 hours.';
        case 720:
            return 'Every day.';
        case 10080:
            return 'Every week.';
        default:
            return '';
    };
};