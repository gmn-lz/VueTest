class LRUCache {
    data = new Map(); // 数据map
    constructor(length) {
    if (length < 1) throw new Error('长度不能小于1')
        this.length = length
    }

    set(key, value) {
        const data = this.data;
        // 如果存在该对象,则直接删除
        if (data.has(key)) {
            data.delete(key);
        }
        // 将数据对象添加到map中
        data.set(key, value);
        if (data.size > this.length) {
            // 如果map长度超过最大值,则取出map中的第一个元素,然后删除
            const delKey = data.keys().next().value
            data.delete(delKey);
        }
    }
    get(key) {
        const data = this.data;
        // 数据map中没有key对应的数据,则返回null
        if (!data.has(key)) return null;
        const value = data.get(key);
        // 返回数据前,先删除原数据,然后在添加,就可以保持在最新
        data.delete(key);
        data.set(key, value);
        return value;
    }
}

const lruCache = new LRUCache(2);
lruCache.set('1', 1); // Map(1) {1 => 1}
lruCache.set('2',2); // Map(2) {1 => 1, 2 => 2}
console.log(lruCache.get('1')); // Map(2) {2 => 2, 1 => 1}
lruCache.set('3',3); // Map(2) {1 => 1, 3 => 3}
console.log(lruCache.get('2')); // null
lruCache.set('4',4); // Map(2) {3 => 3, 4 => 4}
console.log(lruCache.get('1')); // null
console.log(lruCache.get('3')); // Map(2) {4 => 4, 3 => 3}
console.log(lruCache.get('4')); // Map(2) {3 => 3, 4 => 4}
