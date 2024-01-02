import tw from "tailwind-styled-components";

export const constainer = tw.div`
    flex
    justify-center


    `;

export const maplistTop = tw.div`
    text-center
    text-2xl
    font-bold
    p-9

    
`;
export const maplistConstainer = tw.div`
    text-left
`;
export const maplistContent = tw.div`

`;
export const maplistContentBox = tw.div`
border-2
border-solid
border-gray-300
p-3
m-2
hover:scale-105
hover:bg-[var(--primaryColor)]
hover:transition
hover:duration-300
hover:text-white
`;
export const maplistContentBoxTitle = tw.div`

`;

export const maplistContentBtnBox = tw.div`
flex
justify-evenly`;
export const maplistContentBoxBtn = tw.button`
text-[var(--p)]
font-bold
cursor-pointer
shadow
p-5
rounded-md
bg-[var(--accentColor)]
hover:scale-105
hover:bg-[var(--primaryColor)]
hover:transition
`;

export const maplistContentBoxAddress = tw.div`
text-xs`;
export const maplistContentBoxplaceUrl = tw.div`
cursor-pointer`;
