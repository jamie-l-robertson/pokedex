import Styled from "styled-components";

export const PaginationWrapper = Styled.footer`
    display: block;
    max-width: 90%;
    margin: 0 auto 20px;

    @media (min-width: 600px) {
        max-width: 600px;
    }

    .btn--next {
        float: right;
        margin-right: 0;
    }
`;
