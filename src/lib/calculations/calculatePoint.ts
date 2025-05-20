export function calculatePoint(
        index: number,
        value: number,
        len: number,
        minimal?: boolean,
) {
        
        const angleSlice = (Math.PI * 2) / len;
    
        const angle = angleSlice * index - Math.PI / 2;
        const radius = minimal ? 190 : 150;
        const scaledValue = (value / 100) * radius;

        const x = 200 + scaledValue * Math.cos(angle);
        const y = 200 + scaledValue * Math.sin(angle);

        return { x, y };
}
