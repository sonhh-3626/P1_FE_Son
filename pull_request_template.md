  ## 📝 Checklist Tự Review Pull Request (Frontend: React + TS)

  - [ ] TypeScript Strictness: Đảm bảo code được định kiểu chính xác (Props, State, Redux/API Data). Tránh sử dụng `any`; nếu bắt buộc, hãy giải thích lý do.
  - [ ] Component Logic: Đảm bảo Component chỉ thực hiện một nhiệm vụ duy nhất (Single Responsibility Principle). Logic phức tạp nên được tách vào Custom Hooks.
  - [ ] Dấu nháy: Sử dụng nháy đơn (' ) cho chuỗi ký tự trong logic JS/TS. Sử dụng nháy kép (" ") cho các thuộc tính trong JSX/HTML.
  - [ ] Expensive Calculations: Các hàm tính toán nặng (ví dụ: filter, sort list lớn) đã được bọc trong `useMemo` để lưu giá trị giữa các lần render.
  - [ ] Callback Handlers: Các hàm xử lý sự kiện (event handlers) được truyền xuống Component con đã được bọc trong `useCallback` để duy trì tham chiếu, tránh re-render Component con không cần thiết.
  - [ ] Code Splitting (Lazy Loading): Đã dùng `React.lazy` và `Suspense` để tải động các Route hoặc Feature không cần thiết ban đầu, cải thiện thời gian tải trang ban đầu (Initial Load Time).
  - [ ] Đã xóa tất cả các `console.log`, `debugger` và code tạm thời/dead code.


## Related Tickets
- ticket redmine

## WHAT (optional)
- Change number items `completed/total` in admin page.

## HOW
- I edit js file, inject not_vary_normal items in calculate function.

## WHY (optional)
- Because in previous version - number just depends on `normal` items. But in new version, we have `state` and `confirm_state` depends on both `normal` + `not_normal` items.

## Evidence (Screenshot or Video)


## Notes (Kiến thức tìm hiểu thêm)
