import {useEffect, useState} from "react";

export const usePagination = (opts) => {
    const [skip, _setSkip] = useState(0);
    const [take, _setTake] = useState(10);
    const [page, _setPage] = useState(0);

    useEffect(() => {
        if (!opts) return;
        if (opts.take) _setTake(opts.take);
        if (opts.skip) _setSkip(opts.skip);
    }, [opts]);

    const setPage = (page) => {
        if (page < 0) return;
        _setPage(page);
        _setSkip(page * take);
    };
    const setTake = (curTake) => {
        if (skip < curTake) {
            _setSkip(0);
        }
        _setTake(curTake);
        _setPage(Math.floor(skip / curTake));
    };

    return { page, skip, take, setPage, setTake };
};