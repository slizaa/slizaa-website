---
title: Examples
date: 2018-03-09
publishdate: 2018-03-09
doccats: ["Overview"]
doccats_weight: 2
---

Examples.<!--more--> 

## Examples

{{< highlight java "linenos=table" >}}
    public void createInitialLayout(IPageLayout layout) {
        layout.addView(INavigationProvider.NAVIGATION_VIEW_ID, IPageLayout.LEFT, 0.2f, layout.getEditorArea());
        layout.addView(BookingEditor.ID, IPageLayout.TOP, 0.8f, layout.getEditorArea());
        layout.setEditorAreaVisible(false);
    }
{{< / highlight >}}