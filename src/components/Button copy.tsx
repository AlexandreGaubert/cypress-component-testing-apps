/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import { Tooltip } from '@mui/material';
import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  >,
  React.AriaAttributes {}

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
      <Tooltip title="button">
        <button
          className={`
        py-2
        px-6
        rounded-sm
        self-start      
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50   
        disabled:cursor-not-allowed
        ${className}
        `}
          {...rest}
        >
          {children as any}
        </button>
      </Tooltip>
    </>
  );
};

export default Button;
