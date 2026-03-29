import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export function VirtualizedDemo() {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: 40,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 32,
    overscan: 6,
  });

  return (
    <div
      ref={parentRef}
      className="border-border bg-card text-card-foreground h-40 overflow-auto rounded-lg border font-mono text-xs"
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((vi) => (
          <div
            key={vi.key}
            className="border-border/50 absolute top-0 left-0 flex w-full items-center border-b px-2"
            style={{
              height: `${vi.size}px`,
              transform: `translateY(${vi.start}px)`,
            }}
          >
            Virtual row {vi.index + 1} — placeholder list slot
          </div>
        ))}
      </div>
    </div>
  );
}
