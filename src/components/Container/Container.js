import React from "react";
import * as S from "./Container.styles";

const Container = ({children}) =>{
    return <S.ConatinerContent>{children}</S.ConatinerContent>
};

export default Container;