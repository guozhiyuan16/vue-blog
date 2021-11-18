
/**
 * @func 处理数据方便渲染
 * @param {*} arr 
 * @param {*} f 
 * @returns 
 */
export const groupBy = (arr,f) => {
    const groups = {};
    arr.forEach( item => {
        const group = JSON.stringify(f(item));
        groups[group] =  groups[group] || [];
        groups[group].push(item)
    });
    return Object.keys(groups).map(group => groups[group])
}