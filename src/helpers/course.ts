export const getTotalChapter = (course: any) => {
    if (course.courseContents === undefined) return 0;
    return course.courseContents.length;
};

export const getTotalLesson = (course: any) => {
    if (course.courseContents === undefined) return 0;

    let totalLesson = 0;
    course.courseContents.forEach((chapter: any) => {
        totalLesson += chapter.lessons.length;
    });

    return totalLesson;
};
