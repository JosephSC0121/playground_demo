import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownCardProps {
  children: string
}

export function MarkdownCard({ children }: MarkdownCardProps) {
  return <ReactMarkdown className="prose">{children}</ReactMarkdown>
}

export default MarkdownCard
