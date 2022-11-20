import { FC } from 'react';

interface Props {
    content: string;
    author: string;
}

export const QuoteDisplay: FC<Props> = ({ content, author }) => {
    return content === '' ? (
        <button className="btn btn-ghost loading"></button>
    ) : (
        <>
            <h2 className="card-title justify-center">{content}</h2>
            <p className="italic">- {author}</p>
        </>
    );
};
