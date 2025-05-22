[**useOptimistic** Hook](https://youtu.be/M4BtR93fydQ?si=1liwjwWvtu0SvjuY)

[useOptimistic docs](https://react.dev/reference/react/useOptimistic)

## ✅ Part 1 [What are **Optimistic** updates?](https://youtu.be/M3mGY0pgFk0?si=uWg2ADlmsSG-HnTT&t=27)

**Optimistic updates** are a UI technique where the interface is updated immediately as if an operation (such as form submission or data mutation) has already succeeded, even before receiving a server response.

### 🔁 Why Use Optimistic Updates?

- **Improves user experience:** The app feels faster and more responsive.
- **Reduces perceived latency:** Users see the result of their actions immediately.
- **Common in apps like:**
  - Twitter (posting a tweet)
  - Trello (moving a card)
  - Instagram (liking a photo)

### 🔧 How It Works

1. **User triggers an action** (e.g., adds a comment).
2. **UI immediately reflects the change** (the comment appears in the list).
3. **A network request is sent** in the background to persist the change.
4. **If the request succeeds:** Nothing changes.
5. **If the request fails:** Roll back the optimistic update and show an error.

---

## ✅ Part 2: [`useOptimistic` Hook in React](https://youtu.be/M4BtR93fydQ?si=zR_Gxy9zCoLaDjOw&t=317)

`useOptimistic` is a **React hook** introduced to make implementing optimistic UI updates easier in React apps, especially when working with Server Actions in React Server Components (RSC) or Next.js App Router.

> ⚠️ useOptimistic is mainly used in React 18+ and is especially relevant in Next.js with Server Actions.