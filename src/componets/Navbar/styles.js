import styled from 'styled-components';

export const Container = styled.nav`


    background:linear-gradient(150deg, #53f 15%, #05d5ff);
    
    >ul { 
        display:flex;
        align-items:center;
        justify-content:center;
        
        padding:0 21px;

    }

`;

export const DropdownStyles = styled.div`

.dropdown-option{
    padding:20px 25px;
    outline:0;
    color:#fff;
    font-size:18px;


    transition:opacity 0.2s;

    &:hover, &:focus {
        opacity: .55;

    }

}
.dropdown-root{
    z-index:10;
    position:absolute;

}
.dropdown-arrow{
    position: relative;
    &::before{
        content:'';
        position:absolute;
        width:16px;
        height:16px;
        background:#fff;

        top: -6.5px;
        left: -8px;
        border-radius: 4px 0 0 0;
        transform:rotate(45deg);
    }
}

.dropdown-container{
    position:absolute;
    overflow:hidden;
    box-shadow: -3px -3px 5px rgba(82,95,127, 0.25),
    0 30px 60px -30px rgba(0,0,0, 0.3),
    0 -18px 60px -10px rgba(0,0,0, 0.25);
    
    background:#fff;
    border-radius:4px;


}

.dropdown-background{
    position :absolute;
    bottom: 0;
    background: #f6f9fc;
    width:100%;
}

.dropdown-section{
    position:absolute;
    
}



`;

