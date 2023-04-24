export const getTotalChapter = (course: any) => {
    if (course.tracks === undefined) return 0;
    return course.tracks.length;
};

export const getTotalLesson = (course: any) => {
    if (course.tracks === undefined) return 0;

    let totalLesson = 0;
    course.tracks.forEach((chapter: any) => {
        totalLesson += chapter.steps.length;
    });

    return totalLesson;
};
