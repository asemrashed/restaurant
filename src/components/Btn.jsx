import { Button } from "@mui/material";

export default function Btn({
    variant='field', value, onClick,href, height='56px', 
    sfsize='16px', lfsize='18px', color='#000', fWeight='700',
    bg=' #FEBF00',hoverBg='#fff', 
    hoverText=' #BD1F17', outline,minWidth,minHeight, width='180px', minD='block', maxD="block"
}) {
    
    const handleClick = () => {
      if (onClick) {
        onClick();
      } else if (href) {
        window.location.href = href;  
      }
    };
    
    return (
    <Button
      variant={variant}
      onClick={handleClick}
      type="submit"
      sx={{
        display:{xs: minD, md: maxD},
        bgcolor: bg,
        padding:'10px',
        color: color,
        fontWeight: fWeight,
        fontSize:{xs: sfsize, md:lfsize},
        height:{xs:minHeight, md: height},
        width: {xs:minWidth, md:width},
        ':hover':{
          color: hoverText,
          backgroundColor: hoverBg,
        }
      }}
    >
      {value}
    </Button>
  );
}
