function secondIndex(text, symbol) {
    let indices = [];
    let arrStr = text.split('');
    let idx = arrStr.indexOf(symbol);
    while (idx !== -1) {
        indices.push(idx);
        idx = arrStr.indexOf(symbol, idx + 1);
    }
    return indices[1];
}

secondIndex("sims", "s");