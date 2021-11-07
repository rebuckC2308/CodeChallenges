/**
 * 23. Merge k Sorted Lists:
 *
 *You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
 */

/**
 * Thought Process:
 * given k number of linked lists that are already sorted in ascending order
 * we want to merge k number of linked lists into one list
 * want to merge two lists at a time until there is only 1 linked list remaining
 * so we will return list[0] when list.length === 1
 *
 * create a helper function mergeLists to merge each list
 *
 * pull two lists from the list array
 * let a = list.shift();
 * let b = list.shift();
 * merge the lists together
 * push back into the array
 * repeat until 1 list is remaining and return list[0]
 */

//hepler function:
const mergeLists = function (a, b) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (a != null && b != null) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }
  current.next = a || b;

  return dummy.next;
};

const mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let mergedAB = mergeLists(a, b);
    lists.push(mergedAB);
  }

  return lists[0];
};
