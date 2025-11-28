'use client';

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Learning = () => {
    const [count, setCount] = useState<number>(0);

    // Variables & types
    let testVariable1: number = 5;
    const testVariable2: string = 'Hello, A+ Games!';
    const testVariable3: boolean = false;
    const isSingleplayer = false;

    if (isSingleplayer) {
        // Do the singleplayer game
    } else {
        // Do the multiplayer game
    }

    // Math
    testVariable1 = testVariable1 + 10 * 2;

    // If and loops
    if (testVariable1 > 20) {
        testVariable1 = testVariable1 + 3;
    } else if (testVariable1 === 20) {
        testVariable1 = 0;
    } else {
        for (let i = 0; i < 5; i++) {
            testVariable1 = testVariable1 - 1;
        }
    }

    // Functions

    function greet(name: string): string {
        return `Hello, ${name}! Welcome to A+ Games.`;
    }

    const multiply = (a: number, b: number): number => {
        return a * b;
    };

    const score = 5;
    const levelMultiplier = 2;
    const bonusTokens = multiply(score, levelMultiplier);

    // APIs / built-ins

    const currentDate: Date = new Date();
    const arr = [1, 2, 3, 4, 5];
    arr.forEach(num => {
        console.log(num);
    });

    // Output
    console.log(count);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 100000000000);
            console.log(count);
        }, 1);
    }, [count]);

    // Increment button 
    return (
        <div>
            <div>Learning Page</div>
            <div>{count}</div>
            <Button variant='contained' onClick={() => setCount(count + 1)}>Click to get a point</Button>
        </div>
    );
};

export default Learning;