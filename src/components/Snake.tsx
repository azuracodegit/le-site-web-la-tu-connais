import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Point = {
  x: number;
  y: number;
};

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

export default function Snake({ onClose }: { onClose: () => void }) {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showReward, setShowReward] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Empêcher le défilement de la page avec les flèches
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }

    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
    }
  }, [direction]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newHead = {
          x: (prevSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
          y: (prevSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
        };

        // Check collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => {
            const newScore = prev + 1;
            if (newScore >= 10) {
              setShowReward(true);
              setGameOver(true);
            }
            return newScore;
          });
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [direction, food, generateFood, gameOver]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Snake Game</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-4 text-center">
          <span className="text-lg font-semibold">Score: {score}/10</span>
        </div>

        <div
          className="relative bg-gray-100 border-2 border-gray-300 rounded-lg"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-blue-600 rounded-sm"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
              }}
            />
          ))}
          <div
            className="absolute bg-red-500 rounded-full"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
            }}
          />
        </div>

        <AnimatePresence>
          {(gameOver || showReward) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 text-center"
            >
              {showReward ? (
                <div className="space-y-2">
                  <p className="text-green-600 font-bold text-lg">Félicitations ! 🎉</p>
                  <p className="text-gray-700">Score parfait : {score}/10</p>
                  <p className="text-gray-700">Votre code promo : <span className="font-bold text-blue-600">SNAKE10</span></p>
                  <p className="text-sm text-gray-500">Utilisez ce code pour bénéficier de 10% de réduction !</p>
                </div>
              ) : (
                <div>
                  <p className="text-red-600 font-bold">Game Over!</p>
                  <p className="text-gray-600 text-sm mt-1">Score final : {score}/10</p>
                  {score < 10 && <p className="text-gray-500 text-xs mt-1">Atteignez 10 points pour débloquer une récompense !</p>}
                </div>
              )}
              <button
                onClick={() => {
                  if (!showReward) {
                    setSnake(INITIAL_SNAKE);
                    setDirection(INITIAL_DIRECTION);
                    setScore(0);
                    setGameOver(false);
                    generateFood();
                  } else {
                    onClose();
                  }
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {showReward ? 'Fermer' : 'Rejouer'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 