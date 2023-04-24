export const getTotalTime = (course: any) => {
    if (course.tracks === undefined) return 0;

    let totalTime = 0;
    course.tracks.forEach((chapter: any) => {
        chapter.steps.forEach((lesson: any) => {
            totalTime += lesson.duration;
        });
    });
    return totalTime;
};

export const convertNumberToTimeVIE = (time: any) => {
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(minutes / 60);
    if (hours !== 0) {
        minutes = minutes - hours * 60;
    }
    return `${addLeadingZeros(hours, 2)} giờ ${addLeadingZeros(minutes, 2)} phút`;
};

export const convertNumberToTimeENG = (num: any) => {
    let seconds = num % 60;
    let minutes = Math.floor(num / 60);
    let hours = Math.floor(minutes / 60);
    if (hours !== 0) {
        minutes = minutes - hours * 60;
        return `${addLeadingZeros(hours, 2)}:${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
    }
    return `${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
};

export const addLeadingZeros = (num: any, totalLength: any) => {
    return String(num).padStart(totalLength, '0');
};

export const convertTimeToNumber = (hours: any, minutes: any, seconds: any) => {
    return hours * 3600 + minutes * 60 + seconds;
};
