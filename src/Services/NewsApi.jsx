import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '99ef9b77cemshc984c40c7c9547ap1d6f69jsnc419ac4bff18',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url , headers: newsApiHeaders});

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = newsApi;